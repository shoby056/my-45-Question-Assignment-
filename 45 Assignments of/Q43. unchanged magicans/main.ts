function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];

    for (const magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }

    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magiciansArray: string[] = ['Hasnain', 'David', 'Yahya', 'Eric', 'Shazaib', 'Aamir', 'Izhar', 'Shaan'];

const greatMagiciansArray = make_great([...magiciansArray]);

console.log("Original magicians array:");
show_magicians(magiciansArray);

console.log("\nGreat magicians array:");
show_magicians(greatMagiciansArray);
