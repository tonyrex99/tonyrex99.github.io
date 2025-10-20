import { writeFileSync } from 'fs';
const dataToCsv = `New slate- September 2022
Mum's flight to and fro lagos-115k
flight change - 12,000
Wrist watch. - 15,500
Provision.  (Ebunife and Anu) sept  -16,300
Provisions to keep - 31k
Provision for Anu via favour- 11,600
Tokunbo -10,000
Tireni's cake-5k
Cloth Aba trf -22,000
Feet fab shoes- 40,000
Anu's airport runs(from schl & ph)- 7900
# December 
Provisions Jan 2023) -24000
Airport runs from PH Jan( 2023)- 9000
Glasses- 6000
Toothbrush 2-1100
Cornflakes, milk, biscuit,coco pop, Nescafé etc-24,000
Jam2 , dried onion2-2400
Tissue-600
Neo_me droll-1700
#Feb 2023
#Mid term Anu
Logisticsfrom airport -3,700
Ebunife from school-13,000
#March
Drugs for mum tireni- 11,000
Flight from PH- 60,000
#(+234 806 243 0092past Toyin)
#April 
Anu from school-12000
Anu back to school-12000
Embassy to and fro-8,000
Ebunife NiN -10,000
#June
To lawyer in Ibadan-10k
Custume for Anu- 4500
Airport runs (25/6/2023) Anu -6400
#July
Artwork for church-4k
Trip to Ambassador ( balances)-15k
Anu back to schl-18k
Ebunife NIN scanning and passport scanning- 10,000
Tfare to passport office x2/Ebunife-5,000
Stamping of passport-2,500
Anu's logistic to&fro (Ota) school for post jamb-20,000
#December 
Ebunife from schl Dec 2023-20k 
Ebunife back to schl Jan 2024-15k 
Ebunife from school march-22,000
Provision for Anu( April 2024)- 24,000
Provisions for Anu June 2024)- 10300
Transport to AirportAnu) July- 5000`;

// Split the data into lines
const lines = dataToCsv.split('\n');

// Create an array to hold the CSV data
const csvData = [['Item', 'Cost']];

// Process each line
lines.forEach((line) => {
  if (line.startsWith('#')) {
    // For lines starting with '#', add the entire line to one row with 2 columns
    csvData.push(['', '']);
    csvData.push([line, '']);
    csvData.push(['', '']);
  } else {
    // Split on the '-' and trim any extra spaces
    const [item, cost] = line.split('-').map((part) => part.trim());
    // Push the split data into the CSV array
    let formattedCost = `"${cost.endsWith('k') ? cost.slice(0, -1) * 1000 : cost.replaceAll(',', '')}"`;
    let newCost = isNaN(Number(formattedCost))
      ? formattedCost
      : Number(formattedCost);
    csvData.push([`"${item}"`, newCost]);
  }
});

// Convert the array to a CSV string
const csvContent = csvData.map((row) => row.join(',')).join('\n');

// Write the CSV content to a file
writeFileSync('output.csv', csvContent);

console.log('CSV file has been saved as output.csv');
