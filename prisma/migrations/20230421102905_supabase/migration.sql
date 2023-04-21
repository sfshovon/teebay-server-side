-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "categories" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "product_price" DECIMAL NOT NULL,
    "rent_price" DECIMAL NOT NULL,
    "rent_type" TEXT NOT NULL,
    "date_posted" TEXT NOT NULL,
    "views_count" INTEGER NOT NULL,
    "created_by_id" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rentInfo" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "rented_by_id" INTEGER NOT NULL,
    "rent_start_date" TEXT NOT NULL,
    "rent_finish_date" TEXT NOT NULL,

    CONSTRAINT "rentInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_bought_by" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_bought_by_AB_unique" ON "_bought_by"("A", "B");

-- CreateIndex
CREATE INDEX "_bought_by_B_index" ON "_bought_by"("B");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rentInfo" ADD CONSTRAINT "rentInfo_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rentInfo" ADD CONSTRAINT "rentInfo_rented_by_id_fkey" FOREIGN KEY ("rented_by_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bought_by" ADD CONSTRAINT "_bought_by_A_fkey" FOREIGN KEY ("A") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bought_by" ADD CONSTRAINT "_bought_by_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
