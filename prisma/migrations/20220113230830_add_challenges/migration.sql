-- CreateEnum
CREATE TYPE "Types" AS ENUM ('BODY', 'EYE');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "challenges_completed" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "current_experience" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "level" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "challenges" (
    "id" TEXT NOT NULL,
    "type" "Types" NOT NULL DEFAULT E'EYE',
    "amount" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "challenges_pkey" PRIMARY KEY ("id")
);
