import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
const prisma = new PrismaClient();

async function main() {
    let Appointments = await prisma.appointments.createMany({
        data :
        [{
            Barber : 'Carlim',
            Day : new Date("2023-04-24"),
            Time : 800
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-24"),
            Time : 830
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-24"),
            Time : 900
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-24"),
            Time : 930
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-24"),
            Time : 1000
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-24"),
            Time : 1030
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-24"),
            Time : 1100
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-24"),
            Time : 1130
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-24"),
            Time : 1400
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-24"),
            Time : 1430
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-24"),
            Time : 1500
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-24"),
            Time : 1530
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-24"),
            Time : 1600
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-24"),
            Time : 1630
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-24"),
            Time : 1700
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-24"),
            Time : 1730
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-24"),
            Time : 800
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-24"),
            Time : 830
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-24"),
            Time : 900
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-24"),
            Time : 930
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-24"),
            Time : 1000
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-24"),
            Time : 1030
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-24"),
            Time : 1100
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-24"),
            Time : 1130
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-24"),
            Time : 1400
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-24"),
            Time : 1430
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-24"),
            Time : 1500
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-24"),
            Time : 1530
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-24"),
            Time : 1600
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-24"),
            Time : 1630
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-24"),
            Time : 1700
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-24"),
            Time : 1730
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-25"),
            Time : 800
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-25"),
            Time : 830
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-25"),
            Time : 900
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-25"),
            Time : 930
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-25"),
            Time : 1000
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-25"),
            Time : 1030
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-25"),
            Time : 1100
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-25"),
            Time : 1130
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-25"),
            Time : 1400
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-25"),
            Time : 1430
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-25"),
            Time : 1500
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-25"),
            Time : 1530
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-25"),
            Time : 1600
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-25"),
            Time : 1630
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-25"),
            Time : 1700
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-25"),
            Time : 1730
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-25"),
            Time : 800
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-25"),
            Time : 830
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-25"),
            Time : 900
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-25"),
            Time : 930
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-25"),
            Time : 1000
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-25"),
            Time : 1030
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-25"),
            Time : 1100
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-25"),
            Time : 1130
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-25"),
            Time : 1400
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-25"),
            Time : 1430
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-25"),
            Time : 1500
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-25"),
            Time : 1530
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-25"),
            Time : 1600
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-25"),
            Time : 1630
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-25"),
            Time : 1700
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-25"),
            Time : 1730
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-26"),
            Time : 800
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-26"),
            Time : 830
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-26"),
            Time : 900
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-26"),
            Time : 930
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-26"),
            Time : 1000
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-26"),
            Time : 1030
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-26"),
            Time : 1100
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-26"),
            Time : 1130
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-26"),
            Time : 1400
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-26"),
            Time : 1430
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-26"),
            Time : 1500
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-26"),
            Time : 1530
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-26"),
            Time : 1600
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-26"),
            Time : 1630
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-26"),
            Time : 1700
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-26"),
            Time : 1730
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-26"),
            Time : 800
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-26"),
            Time : 830
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-26"),
            Time : 900
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-26"),
            Time : 930
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-26"),
            Time : 1000
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-26"),
            Time : 1030
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-26"),
            Time : 1100
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-26"),
            Time : 1130
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-26"),
            Time : 1400
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-26"),
            Time : 1430
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-26"),
            Time : 1500
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-26"),
            Time : 1530
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-26"),
            Time : 1600
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-26"),
            Time : 1630
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-26"),
            Time : 1700
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-26"),
            Time : 1730
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-27"),
            Time : 800
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-27"),
            Time : 830
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-27"),
            Time : 900
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-27"),
            Time : 930
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-27"),
            Time : 1000
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-27"),
            Time : 1030
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-27"),
            Time : 1100
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-27"),
            Time : 1130
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-27"),
            Time : 1400
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-27"),
            Time : 1430
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-27"),
            Time : 1500
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-27"),
            Time : 1530
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-27"),
            Time : 1600
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-27"),
            Time : 1630
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-27"),
            Time : 1700
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-27"),
            Time : 1730
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-27"),
            Time : 800
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-27"),
            Time : 830
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-27"),
            Time : 900
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-27"),
            Time : 930
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-27"),
            Time : 1000
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-27"),
            Time : 1030
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-27"),
            Time : 1100
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-27"),
            Time : 1130
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-27"),
            Time : 1400
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-27"),
            Time : 1430
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-27"),
            Time : 1500
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-27"),
            Time : 1530
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-27"),
            Time : 1600
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-27"),
            Time : 1630
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-27"),
            Time : 1700
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-27"),
            Time : 1730
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-28"),
            Time : 800
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-28"),
            Time : 830
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-28"),
            Time : 900
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-28"),
            Time : 930
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-28"),
            Time : 1000
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-28"),
            Time : 1030
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-28"),
            Time : 1100
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-28"),
            Time : 1130
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-28"),
            Time : 1400
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-28"),
            Time : 1430
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-28"),
            Time : 1500
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-28"),
            Time : 1530
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-28"),
            Time : 1600
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-28"),
            Time : 1630
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-28"),
            Time : 1700
        },
        {
            Barber : 'Carlim',
            Day : new Date("2023-04-28"),
            Time : 1730
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-28"),
            Time : 800
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-28"),
            Time : 830
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-28"),
            Time : 900
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-28"),
            Time : 930
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-28"),
            Time : 1000
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-28"),
            Time : 1030
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-28"),
            Time : 1100
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-28"),
            Time : 1130
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-28"),
            Time : 1400
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-28"),
            Time : 1430
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-28"),
            Time : 1500
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-28"),
            Time : 1530
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-28"),
            Time : 1600
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-28"),
            Time : 1630
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-28"),
            Time : 1700
        },
        {
            Barber : 'Baixim',
            Day : new Date("2023-04-28"),
            Time : 1730
        }


        ]

    })


}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
