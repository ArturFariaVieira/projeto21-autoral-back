/*
  Warnings:

  - Changed the type of `Day` on the `Appointments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Appointments" DROP COLUMN "Day",
ADD COLUMN     "Day" TIMESTAMP(3) NOT NULL;
