function data(x) {
  console.log(x); //-- Head rescrussion
  if (x > 0) {
    data(x - 1);
  }
  console.log(x, "tail--rescrussion"); //tail-rescrussion
}

data(5);
