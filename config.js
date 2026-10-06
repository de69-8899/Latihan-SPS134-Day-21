const APP_CONFIG = {
  portalTitle: "Portal Validasi Presensi",

  event: {
    name: "Latihan SPS 134 - Day 21",
    participantCount: 284,
  },

  api: {
    url: "https://script.google.com/macros/s/AKfycbzUA5uGuhezSLPqf3IvrcY-mnlqv_VKUWlSPvUMKpV77WS0SHaIZSi0eRLTvmDyDcXrHQ/exec",
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
