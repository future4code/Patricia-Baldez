function addZero(number: number) {
    return number <= 9 ? "0" + number : number;
  }
  
  export function formatDate(dateISO: string) {
    let dateObject = new Date(dateISO);
    let day = addZero(dateObject.getDate());
    let month = addZero(dateObject.getMonth() + 1);
    let year = dateObject.getFullYear();
    return `${day}/${month}/${year}`;
  }