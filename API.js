// Jenis Kelamin
const genders = ["Male", "Female"];

// negara
const countries = [
  "Argentina",
  "Australia",
  "Brazil",
  "Canada",
  "China",
  "Denmark",
  "Egypt",
  "France",
  "Germany",
  "India",
  "Indonesia",
  "Italy",
  "Japan",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Russia",
  "South Africa",
  "Spain",
  "United States",
];

const goals = [
  "Menurunkan berat badan",
  "Meningkatkan kebugaran secara umum",
  "meningkatkan kekuatan otot",
  "meningkatkan kesehatan mental",
];

const actvities = [
  "Sangat Tidak Aktif (Jarang Bergerak)",
  "Cukup Aktif (Jalan Kaki beberapa kali sehari",
  "Aktif (Sering Berolahraga ringan)",
  "Sangat Aktif (Berolahraga rutin dan bergerak sepanjang hari",
];

const healths = [
  "sehat tanpa masalah kesehatan",
  "sedang dalam pemulihan dari cedera",
  "Memiliki kondisi medis tertentu",
];

const schedules = [
  {
    hari: "Hari 1",
    olahraga: [
      {
        gerakan: "Push-up",
        repetisi: "15 kali",
        deskripsi:
          "Gerakan dengan menekan tubuh ke atas dari posisi plank menggunakan kekuatan lengan.",
        manfaat: "Meningkatkan kekuatan otot dada, lengan, dan core.",
      },
      {
        gerakan: "Squat",
        repetisi: "20 kali",
        deskripsi:
          "Turun ke posisi duduk dengan lutut sejajar, kemudian naik ke posisi berdiri.",
        manfaat: "Menguatkan otot paha, bokong, dan meningkatkan keseimbangan.",
      },
      {
        gerakan: "Plank",
        durasi: "30 detik",
        deskripsi:
          "Tahan tubuh dalam posisi push-up dengan lengan bawah di lantai.",
        manfaat: "Menguatkan otot core dan punggung.",
      },
      {
        gerakan: "Lari di tempat",
        durasi: "5 menit",
        deskripsi:
          "Lari dengan lutut diangkat setinggi mungkin di satu tempat.",
        manfaat: "Membakar kalori dan meningkatkan kekuatan kardiovaskular.",
      },
    ],
    makanan: [
      {
        waktu_makan: "Sarapan",
        menu: "Oatmeal dengan buah pisang",
        deskripsi:
          "Oatmeal dimasak dengan susu rendah lemak, ditambah potongan pisang.",
        manfaat: "Sumber serat yang membantu pencernaan dan mengenyangkan.",
      },
      {
        waktu_makan: "Makan Siang",
        menu: "Ayam panggang dengan nasi merah dan sayuran",
        deskripsi: "Ayam panggang tanpa kulit, nasi merah, dan sayuran kukus.",
        manfaat:
          "Sumber protein dan serat untuk menjaga energi dan kesehatan otot.",
      },
      {
        waktu_makan: "Makan Malam",
        menu: "Sup sayuran dengan tahu",
        deskripsi: "Sup sayuran dengan tambahan tahu sebagai sumber protein.",
        manfaat:
          "Sumber nutrisi rendah kalori yang baik untuk menurunkan berat badan.",
      },
    ],
  },
  {
    hari: "Hari 2",
    olahraga: [
      {
        gerakan: "Push-up",
        repetisi: "18 kali",
        deskripsi:
          "Gerakan dengan menekan tubuh ke atas dari posisi plank menggunakan kekuatan lengan.",
        manfaat: "Meningkatkan kekuatan otot dada, lengan, dan core.",
      },
      {
        gerakan: "Squat",
        repetisi: "25 kali",
        deskripsi:
          "Turun ke posisi duduk dengan lutut sejajar, kemudian naik ke posisi berdiri.",
        manfaat: "Menguatkan otot paha, bokong, dan meningkatkan keseimbangan.",
      },
      {
        gerakan: "Plank",
        durasi: "40 detik",
        deskripsi:
          "Tahan tubuh dalam posisi push-up dengan lengan bawah di lantai.",
        manfaat: "Menguatkan otot core dan punggung.",
      },
      {
        gerakan: "Jumping Jacks",
        durasi: "2 menit",
        deskripsi: "Loncat sambil membuka kaki dan tangan secara bersamaan.",
        manfaat: "Membakar kalori dan memperkuat otot kardiovaskular.",
      },
    ],
    makanan: [
      {
        waktu_makan: "Sarapan",
        menu: "Smoothie hijau (bayam, pisang, susu almond)",
        deskripsi:
          "Smoothie sehat dengan campuran bayam, pisang, dan susu almond.",
        manfaat: "Kaya akan vitamin dan mineral untuk meningkatkan energi.",
      },
      {
        waktu_makan: "Makan Siang",
        menu: "Ayam panggang dengan quinoa dan sayuran panggang",
        deskripsi: "Ayam panggang, quinoa, dan sayuran panggang.",
        manfaat: "Makanan rendah kalori yang kaya serat dan protein.",
      },
      {
        waktu_makan: "Makan Malam",
        menu: "Salad sayuran dengan alpukat dan telur rebus",
        deskripsi:
          "Salad segar dengan alpukat, telur rebus, dan dressing minyak zaitun.",
        manfaat:
          "Makanan kaya serat dan lemak sehat untuk menjaga kesehatan pencernaan dan otot.",
      },
    ],
  },
  {
    hari: "Hari 3",
    olahraga: [
      {
        gerakan: "Push-up",
        repetisi: "20 kali",
        deskripsi:
          "Gerakan dengan menekan tubuh ke atas dari posisi plank menggunakan kekuatan lengan.",
        manfaat: "Meningkatkan kekuatan otot dada, lengan, dan core.",
      },
      {
        gerakan: "Squat",
        repetisi: "30 kali",
        deskripsi:
          "Turun ke posisi duduk dengan lutut sejajar, kemudian naik ke posisi berdiri.",
        manfaat: "Menguatkan otot paha, bokong, dan meningkatkan keseimbangan.",
      },
      {
        gerakan: "Plank",
        durasi: "45 detik",
        deskripsi:
          "Tahan tubuh dalam posisi push-up dengan lengan bawah di lantai.",
        manfaat: "Menguatkan otot core dan punggung.",
      },
      {
        gerakan: "Mountain Climbers",
        durasi: "3 menit",
        deskripsi:
          "Gerakan cepat dengan menarik lutut ke arah dada dari posisi plank.",
        manfaat: "Membakar lemak dan meningkatkan kardiovaskular.",
      },
    ],
    makanan: [
      {
        waktu_makan: "Sarapan",
        menu: "Omelet sayuran",
        deskripsi:
          "Omelet dari putih telur dengan sayuran seperti paprika dan bayam.",
        manfaat: "Tinggi protein dan rendah kalori, membantu membakar lemak.",
      },
      {
        waktu_makan: "Makan Siang",
        menu: "Ayam panggang dengan ubi dan brokoli",
        deskripsi: "Ayam panggang dengan ubi kukus dan brokoli panggang.",
        manfaat: "Tinggi serat dan vitamin, menjaga kenyang lebih lama.",
      },
      {
        waktu_makan: "Makan Malam",
        menu: "Sup kacang merah dengan sayuran",
        deskripsi: "Sup kacang merah dengan sayuran yang dimasak hingga empuk.",
        manfaat: "Sumber protein nabati yang membantu pemulihan otot.",
      },
    ],
  },
];
export { genders, countries, goals, actvities, healths };
