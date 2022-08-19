/*
  Warnings:

  - You are about to drop the column `productid` on the `cartitems` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "cartitems" DROP CONSTRAINT "cartitems_productid_fkey";

-- AlterTable
ALTER TABLE "cartitems" DROP COLUMN "productid",
ADD COLUMN     "productsizeid" INTEGER;

-- AddForeignKey
ALTER TABLE "cartitems" ADD CONSTRAINT "cartitems_productsizeid_fkey" FOREIGN KEY ("productsizeid") REFERENCES "productsizes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
