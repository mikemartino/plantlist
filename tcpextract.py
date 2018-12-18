from pypacker import ppcap
from pypacker.layer12 import ethernet
from pypacker.layer3 import ip
from pypacker.layer4 import tcp

def extract(filename, cnt=1000):
    
    bts_l = get_pcap(filename, cnt)
    pkts = [ethernet.Ethernet(bts) for bts in bts_l]
    
    pkts_tcp = [pkt.upper_layer.upper_layer for pkt in pkts]
    print("tcp packets: {}".format(len(pkts_tcp)))
    
    # mmartin: Works, just noisy
    #for pkt in pkts_tcp:
    #    print("%d %d <-> %d %d" % (pkt.sport, pkt.seq, pkt.dport, pkt.ack))
    
    # mmartin: When the 0th packet is chosen, this returns the first few HTTP exchanges. This is the same as one of the files output by tcpflow.
    tcp_start = pkts_tcp[0]

    # mmartin: This returns the Javascript segments w/ some errors
    #tcp_start = pkts_tcp[20]
    
    tcp_start.ra_collect(pkts_tcp)
    segments_cnt = len(tcp_start.ra_segments)
    segments_ra = tcp_start.ra_bin()

    print('segment count:\n\n{}'.format(segments_cnt))
    print('number of packets:\n\n{}'.format(len(pkts_tcp)))
    print('ra_segments:\n\n{}'.format(tcp_start.ra_segments))
    print('segments_ra:\n\n{}'.format(segments_ra.decode('ISO-8859-1')))

    return segments_ra

def get_pcap(fname, cnt=1000):
    """
    Read cnt packets from a pcap file, default: 1000
    """
    packet_bytes = []
    pcap = ppcap.Reader(fname)
    
    for ts, buf in pcap:
        packet_bytes.append(buf)
        cnt -= 1
        if cnt <= 0:
            break

    pcap.close()
    return packet_bytes

if __name__ == '__main__':
    extract(filename='./plantlist.pcap', cnt=336)
