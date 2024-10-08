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
        gerakan: "Lari di tempat",
        durasi: "5 menit",
        waktu: "07:00 AM",
        imgUri:
          "https://media.istockphoto.com/id/1176462920/id/foto/wanita-asia-menjalankan-studio-maraton-latar-belakang-putih.jpg?s=2048x2048&w=is&k=20&c=pJU2Eg7M5fdCWuBIu5-BgFN2jujPfFbgm98GRSMMOfM=",
        deskripsi:
          "Lari dengan lutut diangkat setinggi mungkin di satu tempat.",
        manfaat: "Membakar kalori dan meningkatkan kekuatan kardiovaskular.",
        kcal: "-50 kcal",
      },
      {
        gerakan: "Push-up",
        repetisi: "15 kali",
        waktu: "07:10 AM",
        imgUri:
          "https://images.unsplash.com/photo-1616803689943-5601631c7fec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        deskripsi:
          "Gerakan dengan menekan tubuh ke atas dari posisi plank menggunakan kekuatan lengan.",
        manfaat: "Meningkatkan kekuatan otot dada, lengan, dan core.",
        kcal: "-20 kcal",
      },
      {
        gerakan: "Squat",
        repetisi: "20 kali",
        waktu: "07:15 AM",
        imgUri:
          "https://images.unsplash.com/photo-1634788699029-b26c89ed32b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        deskripsi:
          "Turun ke posisi duduk dengan lutut sejajar, kemudian naik ke posisi berdiri.",
        manfaat: "Menguatkan otot paha, bokong, dan meningkatkan keseimbangan.",
        kcal: "-30 kcal",
      },
      {
        gerakan: "Mountain Climbers",
        durasi: "3 menit",
        waktu: "07:20 AM",
        imgUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2t2VwgOqe-B32wZDVEbgzhsYdiPzLEwbVxw&s",
        deskripsi:
          "Gerakan cepat dengan menarik lutut ke arah dada dari posisi plank.",
        manfaat: "Membakar lemak dan meningkatkan kardiovaskular.",
        kcal: "-40 kcal",
      },
      {
        gerakan: "Plank",
        durasi: "30 detik",
        waktu: "07:25 AM",
        imgUri:
          "https://hips.hearstapps.com/hmg-prod/images/hdm119918mh15842-1545237096.png",
        deskripsi:
          "Tahan tubuh dalam posisi push-up dengan lengan bawah di lantai.",
        manfaat: "Menguatkan otot core dan punggung.",
        kcal: "-15 kcal",
      },
      {
        gerakan: "Jumping Jacks",
        durasi: "2 menit",
        waktu: "07:00 AM",
        imgUri:
          "https://media.foodspring.com/magazine/public/uploads/2020/11/DSC02393.jpg",
        deskripsi: "Loncat sambil membuka kaki dan tangan secara bersamaan.",
        manfaat: "Membakar kalori dan memperkuat otot kardiovaskular.",
        kcal: "-25 kcal",
      },
    ],
    makanan: [
      {
        waktu_makan: "Sarapan",
        menu: "Oatmeal dengan buah pisang",
        waktu: "08:00 AM",
        imgUri:
          "https://www.yesdok.com/visual/slideshow/pisang-article-1577038612.jpg?w=1200",
        deskripsi:
          "Oatmeal dimasak dengan susu rendah lemak, ditambah potongan pisang.",
        manfaat: "Sumber serat yang membantu pencernaan dan mengenyangkan.",
        kcal: "+300 kcal",
      },
      {
        waktu_makan: "Makan Siang",
        menu: "Ayam panggang dengan nasi merah dan sayuran",
        waktu: "12:30 PM",
        imgUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbJ8VnQOsOM2ueNAw3OE5V6XXZyvvbQ2zQw&s",
        deskripsi: "Ayam panggang tanpa kulit, nasi merah, dan sayuran kukus.",
        manfaat:
          "Sumber protein dan serat untuk menjaga energi dan kesehatan otot.",
        kcal: "+450 kcal",
      },
      {
        waktu_makan: "Makan Malam",
        menu: "Sup kacang merah dengan sayuran",
        imgUri:
          "https://i.ytimg.com/vi/7GOzChWUP8I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDDKOoFxMaQS6MAINRjrfcf-_c1qQ",
        waktu: "06:30 PM",
        deskripsi: "Sup kacang merah dengan sayuran yang dimasak hingga empuk.",
        manfaat: "Sumber protein nabati yang membantu pemulihan otot.",
        kcal: "+250 kcal",
      },
    ],
  },
];

export { genders, countries, goals, actvities, healths, schedules };
