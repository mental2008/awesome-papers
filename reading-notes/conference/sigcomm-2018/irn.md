---
description: >-
  An improved RoCE NIC (IRN) design that makes a few simple changes to the RoCE
  NIC for better handling of packets.
---

# Revisiting network support for RDMA

## Meta Info

Presented in [SIGCOMM 2018](https://doi.org/10.1145/3230543.3230557).

Authors: Radhika Mittal (_UC Berkeley_), Alexander Shpiner (_Mellanox_), Aurojit Panda (_NYU_), Eitan Zahavi (_Mellanox_), Arvind Krishnamurthy (_UW_), Sylvia Ratnasamy, Scott Shenker (_UC Berkeley_).

## Understanding the paper

* This paper proposes an **improved RoCE NIC (IRN)** design that _makes a few simple changes to the RoCE NIC_ for _better handling of packets_.
  * It shows that PFC is not _fundamentally required_ to support RoCE.
  * It shows that _IRN (without PFC)_ outperforms _RoCE (with PFC)_ by 6-83% for typical network scenarios.

### Background

* Infiniband RDMA
  * Long used in the HPC community.
  * Using _credit-based flow control_ to make the network _lossless_.
  * Not designed to efficiently recover from packet losses, because _packet drops are rare_ in such clusters.
  * Mechanism
    * When the receiver receives an out-of-order packet, it simply _discards_ it and _sends a negative acknowledgement (NACK)_ to the sender.
    * When the sender sees a NACK, it _retransmits all packets_ that were sent after the last acknowledged packet (i.e., it performs _a go-back-N retransmission_).
* RoCE enables the use of RDMA over Ethernet (also IP-routed networks).
  * Adopt _the same Infiniband transport design_.
  * Using PFC to make the network lossless.
* Priority Flow Control (PFC)
  * Ethernet’s flow control mechanism.
  * A switch _sends a pause (or X-OFF) frame_ to the upstream entity (a switch or a NIC), when the queue exceeds a certain configured threshold.
  * When the queue drains below this threshold, _an X-ON frame is sent to resume transmission_.
  * Limitation: various performance issues; make network harder to understand and manage.
* iWARP vs RoCE
  * **iWARP** implement the entire TCP stack in hardware; need to translate TCP's byte stream semantics to RDMA segments.
  * **iWARP** is _significantly more complex and expensive_ than **RoCE**, with _inferior performance_.

### Central Question

* Does RDMA require a lossless network (which includes PFC)?
  * The answer is no.

### Key Designs

* Improve the loss recovery mechanism.
  * _Selective retransmission_ (inspired by TCP’s loss recovery).
* BDP-FC mechanism.
  * _Basic end-to-end packet level flow control_, which _bounds the number of in-flight packets_ by the bandwidth-delay product (BDP) of the network (as suggested in pFabric).
