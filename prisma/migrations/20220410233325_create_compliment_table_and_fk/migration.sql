-- CreateTable
CREATE TABLE "Compliments" (
    "compli_id" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_sender" TEXT NOT NULL,
    "user_receiver" TEXT NOT NULL,
    "tag_refer" TEXT NOT NULL,
    CONSTRAINT "Compliments_user_sender_fkey" FOREIGN KEY ("user_sender") REFERENCES "users" ("user_id") ON DELETE SET NULL ON UPDATE SET NULL,
    CONSTRAINT "Compliments_user_receiver_fkey" FOREIGN KEY ("user_receiver") REFERENCES "users" ("user_id") ON DELETE SET NULL ON UPDATE SET NULL,
    CONSTRAINT "Compliments_tag_refer_fkey" FOREIGN KEY ("tag_refer") REFERENCES "tags" ("tag_id") ON DELETE SET NULL ON UPDATE SET NULL
);
