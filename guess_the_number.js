let u_number = 7;
let m_number = 10;
while (u_number !== m_number) {
  console.log("Wrong");
  if (u_number < m_number) {
    u_number++;
  } else {
    break;
  }
}

console.log("You Got It Right");
