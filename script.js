const murid = [
  {
    name: 'Andi Saputra',
    class: 'Full Stack A',
    score: 87,
  },
  {
    name: 'Budi Santoso',
    class: 'Full Stack A',
    score: 80,
  },
  {
    name: 'Citra Lestari',
    class: 'Full Stack B',
    score: 91,
  },
  {
    name: 'Dewi Anggraini',
    class: 'Backend Core',
    score: 86,
  },
  {
    name: 'Eko Prasetyo',
    class: 'Backend Core',
    score: 77,
  },
  {
    name: 'Fina Amelia',
    class: 'Full Stack A',
    score: 97,
  },
  {
    name: 'Gilang Ramadhan',
    class: 'Full Stack B',
    score: 82,
  },
  {
    name: 'Hani Fitriani',
    class: 'Backend Core',
    score: 88,
  },
  {
    name: 'Irfan Hakim',
    class: 'Full Stack B',
    score: 68,
  },
  {
    name: 'Joko Susilo',
    class: 'Backend Core',
    score: 83,
  },
];

// RENDER TABEL
function renderMurid(dataMurid) {
  const container = document.getElementById('tabelMurid');

  const projectsHTML = dataMurid.map((siswa, nomer) => {
    // BACKGROUND SCORE
    let colorScore;

    if (siswa.score < 75) {
      colorScore = 'nilaiMerah';
    } else if (siswa.score < 85) {
      colorScore = 'nilaiKuning';
    } else {
      colorScore = 'nilaiHijau';
    }

    return `
      <tr>
        <th scope="row">${nomer + 1}</th>
        <td class="fw-bold text-start">${siswa.name}</td>
        <td><div class="bgClass">${siswa.class}</div></td>
        <td><div class="${colorScore}">${siswa.score}</div></td>
      </tr>`;
  });

  container.innerHTML = projectsHTML.join('');
}
renderMurid(murid);

// RATA-RATA NILAI
const totalNilai = murid.reduce((sumMurid, siswa) => sumMurid + siswa.score, 0);
const average = totalNilai / murid.length;
document.getElementById('avScore').textContent = average.toFixed(1);

// TOMBOL SEARCH
const tombolCari = document.getElementById('exampleGhostInput');
tombolCari.addEventListener('search', function () {
  const hurufKecil = tombolCari.value.toLowerCase().trim();

  const cariSiswa = murid.filter((siswa) => siswa.name.toLowerCase().includes(hurufKecil));
  renderMurid(cariSiswa);
  tombolCari.value = '';
});

// FEATHER ICONS
feather.replace();
