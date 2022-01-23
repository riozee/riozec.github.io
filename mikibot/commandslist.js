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
    example: ["/asearch", "/anext", "/astop"],
  },
];
