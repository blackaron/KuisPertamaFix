import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from'../shared/mahasiswa';
@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})
export class MahasiswaComponent implements OnInit {
  daftarMahasiswa:Mahasiswa[] = [];
  nama = '';
  nim = '';
  kelas = '';
  mahasiswa;

  constructor() { }

  ngOnInit() {
  }

  tambahMahasiswa(){
    this. mahasiswa = new Mahasiswa(this.nama, this.nim, this.kelas);
    this.daftarMahasiswa.push(this.mahasiswa);
    this.nama = '';
    this.nim = '';
    this.kelas = '';
  }
}
