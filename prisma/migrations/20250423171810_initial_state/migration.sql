-- DropForeignKey
ALTER TABLE "Hotel" DROP CONSTRAINT "Hotel_userId_fkey";

-- AlterTable
ALTER TABLE "Hotel" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Hotel" ADD CONSTRAINT "Hotel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
