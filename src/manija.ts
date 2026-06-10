export function generarLorem(n: number): string {

  if (n <= 0) {
    return '.';
  }

  return "Lorem Ipsum " + generarLorem(n - 1);
}

console.log(generarLorem(5)); 
