/*
  Warnings:

  - Made the column `first_name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT,
    "about_me" TEXT,
    "current_location" TEXT,
    "open_to_travel" BOOLEAN,
    "profile_photo" BLOB
);
INSERT INTO "new_User" ("about_me", "age", "current_location", "email", "first_name", "gender", "id", "open_to_travel", "password", "profile_photo") SELECT "about_me", "age", "current_location", "email", "first_name", "gender", "id", "open_to_travel", "password", "profile_photo" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
