export const data = {
  results: [
    {
      room: {
        id: 12456,
        name: "Product A",
        image_url: "https://picsum.photos/id/237/200/300",
        participant: [
          {
            id: "admin@mail.com",
            name: "Admin",
            role: 0
          },
          {
            id: "agent@mail.com",
            name: "Agent A",
            role: 1
          },
          {
            id: "customer@mail.com",
            name: "king customer",
            role: 2
          }
        ]
      },
      comments: [
        {
          id: 885512,
          type: "text",
          message: "Selamat malam",
          sender: "customer@mail.com"
        },
        {
          id: 885513,
          type: "text",
          message: "Malam",
          sender: "agent@mail.com"
        },
        {
          id: 885514,
          type: "text",
          message: "Ada yang bisa saya bantu?",
          sender: "agent@mail.com"
        },
        {
          id: 885515,
          type: "text",
          message: "Saya ingin mengirimkan bukti pembayaran, karena diaplikasi selalu gagal",
          sender: "customer@mail.com"
        },
        {
          id: 885516,
          type: "text",
          message: "Baik, silahkan kirimkan lampiran bukti pembayarannya",
          sender: "agent@mail.com"
        },
        {
          id: 885517,
          type: "image",
          message: "Ini bukti pembayarannya",
          media_url: "https://s.kaskus.id/images/2019/09/10/10377764_201909100741390013.jpg",
          sender: "customer@mail.com"
        },
        {
          id: 885518,
          type: "pdf",
          message: "Berikut detail invoice-nya dalam format PDF",
          media_url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          sender: "agent@mail.com"
        },
        {
          id: 885519,
          type: "video",
          message: "Ini rekaman layar saat error",
          media_url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          sender: "customer@mail.com"
        },
        {
          id: 885520,
          type: "youtube",
          message: "Berikut video tutorialnya",
          media_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          sender: "agent@mail.com"
        }

      ]
    }
  ]
};
