function monthOfYear(month){
    switch (month) { 
      case 1:
          console.log(`${month} - Jan`);
          break;
      case 2:
          console.log(`${month} - Feb`);
          break;
      case 3:
          console.log(`${month} - Mar`);
          break;
      case 4:
          console.log(`${month} - Apr`);
          break;
      case 5:
          console.log(`${month} - May`);
          break;
      case 6:
          console.log(`${month} - June`);
          break;
      case 7:
          console.log(`${month} - jully`);
          break;
      case 8:
          console.log(`${month} - Aug`);
          break;
      case 9:
          console.log(`${month} - Sep`);
          break;
      case 10:
          console.log(`${month} - Oct`);
          break;
      case 11:
          console.log(`${month} - Nov`);
          break;
      case 12:
          console.log(`${month} - Dec`);
          break;   
      default:
          console.log(`Invalid Data: ${month}`);
          break;
    }
  }
  monthOfYear(0);
  monthOfYear(2);
  monthOfYear(5);
  monthOfYear(12);
  monthOfYear(15);
  monthOfYear(100);