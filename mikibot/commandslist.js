var commandsList = [
  {
    syntax: ["about"],
    desc: ["Menampilkan pesan tentang bot.", "Shows text about the bot."],
    category: ["bot"],
  },
  {
    syntax: ["menu", "help"],
    desc: [
      "Menampilkan daftar semua perintah yang tersedia.",
      "Displays a list of all available commands.",
    ],
    category: ["bot"],
  },
  {
    syntax: ["kbbi"],
    args: [
      [
        ["kata", "word"],
        ["Kata yang akan dicari", "Word to search"],
      ],
    ],
    desc: [
      "Mencari arti dan definisi kata dalam Kamus Besar Bahasa Indonesia (KBBI).",
      "Look up the meaning and definition of words in the Kamus Besar Bahasa Indonesia (KBBI).",
    ],
    category: ["information"],
    example: ["/kbbi asmara"],
  },
  {
    syntax: ["lowercase"],
    args: [
      [
        ["teks", "text"],
        ["Teks yang akan diubah", "Text to be changed"],
      ],
    ],
    desc: [
      "Mengubah setiap huruf dalam teks menjadi huruf kecil.",
      "Converts each letter in the text to lowercase.",
    ],
    category: ["tools"],
    example: ["/lowercase LOREM IPSUM DOLOR SIT AMET"],
  },
  {
    syntax: ["reversetext"],
    args: [
      [
        ["teks", "text"],
        ["Teks yang akan dibalik", "Text to be reversed"],
      ],
    ],
    desc: [
      "Membalik urutan setiap huruf dalam teks.",
      "Reverse the order of each letter in the text.",
    ],
    category: ["tools"],
    example: ["/reversetext tema tis rolod muspi merol"],
  },
  {
    syntax: ["say"],
    args: [
      [
        ["teks", "text"],
        ["Teks yang akan dikatakan", "Text to say"],
      ],
    ],
    desc: [
      "Bot akan mengatakan kembali teks tersebut.",
      "Bot will repeat the text.",
    ],
    category: ["fun"],
    example: ["/say hello"],
  },
  {
    syntax: ["uppercase"],
    args: [
      [
        ["teks", "text"],
        ["Teks yang akan diubah", "Text to be changed"],
      ],
    ],
    desc: [
      "Mengubah setiap huruf dalam teks menjadi huruf kapital.",
      "Converts each letter in the text to uppercase.",
    ],
    category: ["tools"],
    example: ["/lowercase lorem ipsum dolor sit amet"],
  },
  {
    syntax: ["asearch", "anext", "astop"],
    desc: [
      "Mencari partner, mengganti, dan menghentikan sesi Anonymous Chat.",
      "Find a partner, switch partner, and stops the Anonymous Chat session.",
    ],
    category: ["anonymous-chat"],
  },
  {
    syntax: ["getid"],
    desc: [
      "Menampilkan ID chat saat ini. Digunakan untuk registrasi grup.",
      "Displays the current chat ID. Used for group registration.",
    ],
    category: ["bot"],
  },
  {
    syntax: ["getuid"],
    desc: [
      "Menampilkan ID user Anda. Digunakan untuk registrasi menjadi user premium.",
      "Displays your user ID. Used to register as a premium user",
    ],
    category: ["bot"],
  },
  {
    syntax: ["pricing"],
    desc: [
      "Menampilkan pricelist Miki Bot.",
      "Displays Miki Bot pricelist.",
    ],
    category: ["bot"],
  },
  {
    syntax: ["set"],
    args: [
      [
        ["setting", "setting"],
        ["Nama hal yang ingin diubah/diatur.", "The name of the thing you want to change/set."]
      ]
    ],
    desc: [
      "Mengubah/mengatur sesuatu.",
      "Change/set something.",
    ],
    category: ["bot"],
  },
  {
    syntax: ["set"],
    args: [
      [
        ["setting", "setting"],
        ["Nama hal yang ingin diubah/diatur.", "The name of the thing you want to change/set."]
      ]
    ],
    desc: [
      "Mengubah/mengatur sesuatu.",
      "Change/set something.",
    ],
    category: ["bot"],
  },{
    syntax: ["set lang"],
    args: [
      [
        ["kode-bahasa", "language-code"],
        ["Kode bahasa. Misalnya \"id\" untuk bahasa Indonesia.", "Language code. e.g. \"en\" for English."]
      ]
    ],
    desc: [
      "Mengganti bahasa yang Miki Bot gunakan di dalam chat. Jika di dalam grup, berlaku untuk semua anggota grup dan hanya administrator yang dapat menggantinya.",
      "Change the language that Miki Bot uses in chat. If in a group, it applies to all group members and only administrators can change it.",
    ],
    category: ["bot"],
    example: ["/set lang id"]
  },{
    syntax: ["set name"],
    args: [
      [
        ["nama", "name"],
        ["Nama Anda.", "Your name."]
      ]
    ],
    desc: [
      "Mengganti nama pengguna yang telah teregistrasi.",
      "Changes the name of a registered user.",
    ],
    category: ["bot"],
    example: ["/set name Rioze"]
  },{
    syntax: ["sticker"],
    desc: [
      "Mengubah gambar, video, gif dan dokumen menjadi stiker. Catatan: Hanya didukung di platform WhatsApp.",
      "Convert an image, video, gif and document into a sticker. Note: Only supported on WhatsApp.",
    ],
    category: ["media"]
  },{
    syntax: ["unsticker"],
    desc: [
      "Mengubah stiker menjadi gambar/gif. Catatan: Tidak mendukung stiker animasi di Telegram.",
      "Convert a sticker into an image/gif. Note: Does not support animated stickers on Telegram.",
    ],
    category: ["media"]
  },{
    syntax: ["convert"],
    args: [
      [
        ["format", "format"],
        ["Format tujuan file yang ingin dikonversi.", "Destination file format you want to convert."]
      ]
    ],
    desc: [
      "Mengonversi suatu dokumen ke format yang ditentukan. Catatan: Tidak semua dokumen dapat dikonversi. Lihat perintah convert selanjutnya.",
      "Converts a document to the specified format. Note: Not all documents can be converted. See the next convert command.",
    ],
    category: ["converter"]
  },{
    syntax: ["convert mp3"],
    desc: [
      "Mengonversi video, audio atau dokumen yang didukung ke format MP3.",
      "Convert a video, audio or supported document into MP3 format.",
    ],
    category: ["converter"]
  },
];
