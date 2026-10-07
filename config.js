const APP_CONFIG = {
  portalTitle: "Portal Validasi Presensi",

  event: {
    name: "Latihan SPS 134 - Day 21",
    participantCount: 284,
  },

  api: {
    url: "https://script.google.com/macros/s/AKfycbxfNWmGtlp1DTZ3mNCzozSzWu0i_R1OdAh-sRZJruhSWMyg1etJLI1OAJxIHl72jTDX/exec",
  },

  attendanceCategories: [
    { id: "HADIR", label: "Hadir" },
    { id: "SAKIT", label: "Sakit" },
    { id: "KEAGAMAAN", label: "Agama" },
    { id: "BERDUKA", label: "Duka" },
    { id: "AKADEMIK", label: "Akademik" },
  ],

  unsubmittedCategory: {
    id: "BELUM PRESENSI",
    label: "Belum Presensi",
  },
};
