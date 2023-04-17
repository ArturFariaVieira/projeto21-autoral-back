-- CreateTable
CREATE TABLE "Appointments" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "Barber" TEXT NOT NULL,
    "Day" INTEGER NOT NULL,
    "Time" INTEGER NOT NULL,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
