# Resource Fragmentation

## GPU Fragmentation

|    Name   | Conference                            | Institution            | Links                                                                                                                                                                                                                                               | Remarks                                      |
| :-------: | ------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| **HiveD** | [OSDI 2020](../Conference/OSDI-2020/) | <ul><li>MSRA</li></ul> | <ul><li><a href="../Conference/OSDI-2020/hived.md">Personal Notes</a></li><li><a href="https://www.usenix.org/conference/osdi20/presentation/zhao-hanyu">Paper</a></li><li><a href="https://github.com/microsoft/hivedscheduler">Code</a></li></ul> | Consider GPU affinity; resource reservation. |

## General Fragmentation

|    Name    | Conference   | Institution                 | Links                                                                                | Remarks                                                                                                     |
| :--------: | ------------ | --------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
|  **Borg**  | EuroSys 2015 | <ul><li>Google</li></ul>    | <ul><li><a href="https://dl.acm.org/doi/10.1145/2741948.2741964">Paper</a></li></ul> | Reduce _stranded resources_ that cannot be used because another resource on the machine is fully allocated. |
| **Tetris** | SIGCOMM 2014 | <ul><li>Microsoft</li></ul> | <ul><li><a href="https://dl.acm.org/doi/10.1145/2619239.2626334">Paper</a></li></ul> | _Pack_ jobs to avoid resource fragmentation and over-allocation.                                            |
