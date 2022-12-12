import { firestore } from "../config/firebaseConfig";
import { Timestamp } from "firebase/firestore";

export interface FormType {
    id: string
    stickerFreezer: string
    woblerPromo: string
    kualitasProduk: string
    produkRetur: string
    pilihanToko: string
    kebersihanLem: string
    spanduk: string
    createdAt: Timestamp
    jumlahPo: string
    kodeToko: string
    labelHarga: string
    namaToko: string
    brandLain: string
    stockBrandLain: string
    jumlahItemTerdisplay: string
    papanHarga: string
    kepenuhanFreezerAtas: string
    posisiFreezer: string
    kebersihanDebuFreezer: string
    saranKendala: string
    dividerKulkas: string
    namaDistributor: string
    kategoriFreezer: string
    produkPromosi: string
    kebersihanBungaEs: string
    stockDibawahFreezer: string
    fotoFreezerBawah: string
    fotoKulkasDariJauh: string
    fotoKulkasTerbuka: string
    fotoKulkasTertutup: string
    fotoPo: string
    fotoSela: string
    fotoSelfie: string
    fotoFreezerOne: string
    fotoFreezerTwo: string
    fotoFreezerThree: string
    fotoFreezerIsland1: string
    fotoFreezerIsland2: string
    fotoFreezerIsland3: string
    fotoPop: string
    fotoPeralatan: string


}


export class FormData {
    constructor() {

    }
    public static async postsFirstBatch() {
        try {
            const date = new Date()
            let today = new Date();

            const firstDay = new Date(date.getFullYear(), today.getMonth() - 1, 1);
            const lastDay = new Date(date.getFullYear(), today.getMonth() + 1, 0);
            lastDay.setHours(23, 59, 59, 0)

            const data = await firestore
                .collectionGroup('form')
                .orderBy("Created At", "desc")
                .where('Created At', '>=', firstDay)
                .where('Created At', '<=', lastDay)
                .limit(7)
                .get()

            let posts: FormType[] = [];

            let lastKey = "";
            data.forEach((doc) => {
                posts.push({
                    id: doc.id,
                    stickerFreezer: doc.data()["Sticker Freezer"],
                    woblerPromo: doc.data()["Wobler Promo"],
                    kualitasProduk: doc.data()["Kualitas Produk"],
                    fotoFreezerBawah: doc.data()["Foto Freezer Bawah"],
                    fotoSelfie: doc.data()["Foto Selfie"],
                    produkRetur: doc.data()["Produk Retur"],
                    fotoKulkasDariJauh: doc.data()["Foto Kulkas Dari Jauh"],
                    pilihanToko: doc.data()["Pilihan Toko"],
                    kebersihanLem: doc.data()["Kebersihan Lem Freezer"],
                    spanduk: doc.data()["Spanduk"],
                    createdAt: doc.data()["Created At"],
                    jumlahPo: doc.data()["Jumlah PO"],
                    fotoPo: doc.data()["Foto PO"],
                    fotoKulkasTertutup: doc.data()["Foto Kulkas Tertutup"],
                    kodeToko: doc.data()["Kode Toko"],
                    labelHarga: doc.data()["Label Harga"],
                    namaToko: doc.data()["Nama Toko"],
                    brandLain: doc.data()["Brand Lain"],
                    stockBrandLain: doc.data()["Stock Brand Lain"],
                    jumlahItemTerdisplay: doc.data()["Jumlah Item Terdisplay"],
                    papanHarga: doc.data()["Papan Harga"],
                    kepenuhanFreezerAtas: doc.data()["Kepenuhan Freezer Atas"],
                    posisiFreezer: doc.data()["Posisi Freezer"],
                    kebersihanDebuFreezer: doc.data()["Kebersihan Debu Freezer"],
                    fotoKulkasTerbuka: doc.data()["Foto Kulkas Terbuka"],
                    fotoSela: doc.data()["Foto Sela Freezer"],
                    saranKendala: doc.data()["Saran dan Kendala"],
                    dividerKulkas: doc.data()["Divider Kulkas"],
                    namaDistributor: doc.data()["Nama Distributor"],
                    kategoriFreezer: doc.data()["Kategori Freezer"],
                    produkPromosi: doc.data()["Produk Promosi"],
                    kebersihanBungaEs: doc.data()["Kebersihan Bunga Es"],
                    stockDibawahFreezer: doc.data()["Stock Dibawah Freezer"],
                    fotoFreezerOne: doc.data()["Foto Freezer One"],
                    fotoFreezerTwo: doc.data()["Foto Freezer Two"],
                    fotoFreezerThree: doc.data()["Foto Freezer Three"],
                    fotoFreezerIsland1: doc.data()["Foto Freezer Island 1"],
                    fotoFreezerIsland2: doc.data()["Foto Freezer Island 2"],
                    fotoFreezerIsland3: doc.data()["Foto Freezer Island 3"],
                    fotoPop: doc.data()["Foto Pop"],
                    fotoPeralatan: doc.data()["Foto Peralatan"],
                });
                lastKey = doc.data()['Created At']
            });
            return { posts, lastKey };
        } catch (e) {
            console.log(e);
        }
    }
    public static async postsToday() {
        try {
            const yesterday = new Date(new Date().setHours(0, 0, 0, 0));

            let today = new Date();
            const data = await firestore
                .collectionGroup('form')
                .orderBy("Created At", "desc")
                .where('Created At', '>=', yesterday)
                .where('Created At', '<=', today)
                .get()

            let posts: FormType[] = [];
            let lastKey = "";
            data.forEach((doc) => {
                posts.push({
                    id: doc.id,
                    stickerFreezer: doc.data()["Sticker Freezer"],
                    woblerPromo: doc.data()["Wobler Promo"],
                    kualitasProduk: doc.data()["Kualitas Produk"],
                    fotoFreezerBawah: doc.data()["Foto Freezer Bawah"],
                    fotoSelfie: doc.data()["Foto Selfie"],
                    produkRetur: doc.data()["Produk Retur"],
                    fotoKulkasDariJauh: doc.data()["Foto Kulkas Dari Jauh"],
                    pilihanToko: doc.data()["Pilihan Toko"],
                    kebersihanLem: doc.data()["Kebersihan Lem Freezer"],
                    spanduk: doc.data()["Spanduk"],
                    createdAt: doc.data()["Created At"],
                    jumlahPo: doc.data()["Jumlah PO"],
                    fotoPo: doc.data()["Foto PO"],
                    fotoKulkasTertutup: doc.data()["Foto Kulkas Tertutup"],
                    kodeToko: doc.data()["Kode Toko"],
                    labelHarga: doc.data()["Label Harga"],
                    namaToko: doc.data()["Nama Toko"],
                    brandLain: doc.data()["Brand Lain"],
                    stockBrandLain: doc.data()["Stock Brand Lain"],
                    jumlahItemTerdisplay: doc.data()["Jumlah Item Terdisplay"],
                    papanHarga: doc.data()["Papan Harga"],
                    kepenuhanFreezerAtas: doc.data()["Kepenuhan Freezer Atas"],
                    posisiFreezer: doc.data()["Posisi Freezer"],
                    kebersihanDebuFreezer: doc.data()["Kebersihan Debu Freezer"],
                    fotoKulkasTerbuka: doc.data()["Foto Kulkas Terbuka"],
                    fotoSela: doc.data()["Foto Sela Freezer"],
                    saranKendala: doc.data()["Saran dan Kendala"],
                    dividerKulkas: doc.data()["Divider Kulkas"],
                    namaDistributor: doc.data()["Nama Distributor"],
                    kategoriFreezer: doc.data()["Kategori Freezer"],
                    produkPromosi: doc.data()["Produk Promosi"],
                    kebersihanBungaEs: doc.data()["Kebersihan Bunga Es"],
                    stockDibawahFreezer: doc.data()["Stock Dibawah Freezer"],
                    fotoFreezerOne: doc.data()["Foto Freezer One"],
                    fotoFreezerTwo: doc.data()["Foto Freezer Two"],
                    fotoFreezerThree: doc.data()["Foto Freezer Three"],
                    fotoFreezerIsland1: doc.data()["Foto Freezer Island 1"],
                    fotoFreezerIsland2: doc.data()["Foto Freezer Island 2"],
                    fotoFreezerIsland3: doc.data()["Foto Freezer Island 3"],
                    fotoPop: doc.data()["Foto Pop"],
                    fotoPeralatan: doc.data()["Foto Peralatan"],
                });
                lastKey = doc.data()['Created At']
            });
            return { posts, lastKey };
        } catch (e) {
            console.log(e);
        }
    }
    public static async postsNextBatch(key: string) {
        try {
            const date = new Date()
            let today = new Date();

            const firstDay = new Date(date.getFullYear(), today.getMonth() - 1, 1);
            const lastDay = new Date(date.getFullYear(), today.getMonth() + 1, 0);
            lastDay.setHours(23, 59, 59, 0)

            const data = await firestore
                .collectionGroup('form')
                .orderBy("Created At", "desc")
                .startAfter(key)
                .where('Created At', '>=', firstDay)
                .where('Created At', '<=', lastDay)
                .limit(5000)
                .get()

            let posts: Object[] = [];
            let lastKey = "";
            data.forEach((doc) => {
                posts.push({
                    id: doc.id,
                    stickerFreezer: doc.data()["Sticker Freezer"],
                    woblerPromo: doc.data()["Wobler Promo"],
                    kualitasProduk: doc.data()["Kualitas Produk"],
                    fotoFreezerBawah: doc.data()["Foto Freezer Bawah"],
                    fotoSelfie: doc.data()["Foto Selfie"],
                    produkRetur: doc.data()["Produk Retur"],
                    fotoKulkasDariJauh: doc.data()["Foto Kulkas Dari Jauh"],
                    pilihanToko: doc.data()["Pilihan Toko"],
                    kebersihanLem: doc.data()["Kebersihan Lem Freezer"],
                    spanduk: doc.data()["Spanduk"],
                    createdAt: doc.data()["Created At"],
                    jumlahPo: doc.data()["Jumlah PO"],
                    fotoPo: doc.data()["Foto PO"],
                    fotoKulkasTertutup: doc.data()["Foto Kulkas Tertutup"],
                    kodeToko: doc.data()["Kode Toko"],
                    labelHarga: doc.data()["Label Harga"],
                    namaToko: doc.data()["Nama Toko"],
                    brandLain: doc.data()["Brand Lain"],
                    stockBrandLain: doc.data()["Stock Brand Lain"],
                    jumlahItemTerdisplay: doc.data()["Jumlah Item Terdisplay"],
                    papanHarga: doc.data()["Papan Harga"],
                    kepenuhanFreezerAtas: doc.data()["Kepenuhan Freezer Atas"],
                    posisiFreezer: doc.data()["Posisi Freezer"],
                    kebersihanDebuFreezer: doc.data()["Kebersihan Debu Freezer"],
                    fotoKulkasTerbuka: doc.data()["Foto Kulkas Terbuka"],
                    fotoSela: doc.data()["Foto Sela Freezer"],
                    saranKendala: doc.data()["Saran dan Kendala"],
                    dividerKulkas: doc.data()["Divider Kulkas"],
                    namaDistributor: doc.data()["Nama Distributor"],
                    kategoriFreezer: doc.data()["Kategori Freezer"],
                    produkPromosi: doc.data()["Produk Promosi"],
                    kebersihanBungaEs: doc.data()["Kebersihan Bunga Es"],
                    stockDibawahFreezer: doc.data()["Stock Dibawah Freezer"]
                });
                lastKey = doc.data()['Created At'];
            });
            return { posts, lastKey };
        } catch (e) {
            console.log(e);
        }
    }
    public static async allPosts() {
        try {
            const date = new Date()
            let today = new Date();

            const firstDay = new Date(date.getFullYear(), today.getMonth(), 1);
            const lastDay = new Date(date.getFullYear(), today.getMonth() + 1, 0);
            lastDay.setHours(23, 59, 59, 0)

            console.log(firstDay)
            console.log(lastDay)
            const data = await firestore
                .collectionGroup('form')
                .orderBy("Created At", "desc")
                .where('Created At', '>=', firstDay)
                .where('Created At', '<=', lastDay)
                .get()

            let posts: FormType[] = [];
            let lastKey = "";

            data.forEach((doc) => {

                posts.push({
                    id: doc.id,
                    stickerFreezer: doc.data()["Sticker Freezer"],
                    woblerPromo: doc.data()["Wobler Promo"],
                    kualitasProduk: doc.data()["Kualitas Produk"],
                    fotoFreezerBawah: doc.data()["Foto Freezer Bawah"],
                    fotoSelfie: doc.data()["Foto Selfie"],
                    produkRetur: doc.data()["Produk Retur"],
                    fotoKulkasDariJauh: doc.data()["Foto Kulkas Dari Jauh"],
                    pilihanToko: doc.data()["Pilihan Toko"],
                    kebersihanLem: doc.data()["Kebersihan Lem Freezer"],
                    spanduk: doc.data()["Spanduk"],
                    createdAt: doc.data()["Created At"],
                    jumlahPo: doc.data()["Jumlah PO"],
                    fotoPo: doc.data()["Foto PO"],
                    fotoKulkasTertutup: doc.data()["Foto Kulkas Tertutup"],
                    kodeToko: doc.data()["Kode Toko"],
                    labelHarga: doc.data()["Label Harga"],
                    namaToko: doc.data()["Nama Toko"],
                    brandLain: doc.data()["Brand Lain"],
                    stockBrandLain: doc.data()["Stock Brand Lain"],
                    jumlahItemTerdisplay: doc.data()["Jumlah Item Terdisplay"],
                    papanHarga: doc.data()["Papan Harga"],
                    kepenuhanFreezerAtas: doc.data()["Kepenuhan Freezer Atas"],
                    posisiFreezer: doc.data()["Posisi Freezer"],
                    kebersihanDebuFreezer: doc.data()["Kebersihan Debu Freezer"],
                    fotoKulkasTerbuka: doc.data()["Foto Kulkas Terbuka"],
                    fotoSela: doc.data()["Foto Sela Freezer"],
                    saranKendala: doc.data()["Saran dan Kendala"],
                    dividerKulkas: doc.data()["Divider Kulkas"],
                    namaDistributor: doc.data()["Nama Distributor"],
                    kategoriFreezer: doc.data()["Kategori Freezer"],
                    produkPromosi: doc.data()["Produk Promosi"],
                    kebersihanBungaEs: doc.data()["Kebersihan Bunga Es"],
                    stockDibawahFreezer: doc.data()["Stock Dibawah Freezer"],
                    fotoFreezerOne: doc.data()["Foto Freezer One"],
                    fotoFreezerTwo: doc.data()["Foto Freezer Two"],
                    fotoFreezerThree: doc.data()["Foto Freezer Three"],
                    fotoFreezerIsland1: doc.data()["Foto Freezer Island 1"],
                    fotoFreezerIsland2: doc.data()["Foto Freezer Island 2"],
                    fotoFreezerIsland3: doc.data()["Foto Freezer Island 3"],
                    fotoPop: doc.data()["Foto Pop"],
                    fotoPeralatan: doc.data()["Foto Peralatan"],
                });
                lastKey = doc.data()['Created At']
            });
            return { posts, lastKey };
        } catch (e) {
            console.log(e);
        }
    }
    public static async postsOrang() {
        try {
            const date = new Date()
            let today = new Date();

            const firstDay = new Date(date.getFullYear(), today.getMonth(), 1);
            const lastDay = new Date(date.getFullYear(), today.getMonth() + 1, 0);
            lastDay.setHours(23, 59, 59, 0)
            const data = await firestore
                .collectionGroup('form')
                .where('Created At', '>=', firstDay)
                .where('Created At', '<=', lastDay)
                .get()

            let posts: Object[] = [];
            let lastKey = "";
            data.forEach((doc) => {
                posts.push({
                    id: doc.id,
                    stickerFreezer: doc.data()["Sticker Freezer"],
                    woblerPromo: doc.data()["Wobler Promo"],
                    kualitasProduk: doc.data()["Kualitas Produk"],
                    fotoFreezerBawah: doc.data()["Foto Freezer Bawah"],
                    fotoSelfie: doc.data()["Foto Selfie"],
                    fotoSela: doc.data()["Foto Sela Freezer"],
                    produkRetur: doc.data()["Produk Retur"],
                    fotoKulkasDariJauh: doc.data()["Foto Kulkas Dari Jauh"],
                    pilihanToko: doc.data()["Pilihan Toko"],
                    kebersihanLem: doc.data()["Kebersihan Lem Freezer"],
                    spanduk: doc.data()["Spanduk"],
                    createdAt: doc.data()["Created At"],
                    jumlahPo: doc.data()["Jumlah PO"],
                    fotoPo: doc.data()["Foto PO"],
                    fotoKulkasTertutup: doc.data()["Foto Kulkas Tertutup"],
                    kodeToko: doc.data()["Kode Toko"],
                    labelHarga: doc.data()["Label Harga"],
                    namaToko: doc.data()["Nama Toko"],
                    brandLain: doc.data()["Brand Lain"],
                    stockBrandLain: doc.data()["Stock Brand Lain"],
                    jumlahItemTerdisplay: doc.data()["Jumlah Item Terdisplay"],
                    papanHarga: doc.data()["Papan Harga"],
                    kepenuhanFreezerAtas: doc.data()["Kepenuhan Freezer Atas"],
                    posisiFreezer: doc.data()["Posisi Freezer"],
                    kebersihanDebuFreezer: doc.data()["Kebersihan Debu Freezer"],
                    fotoKulkasTerbuka: doc.data()["Foto Kulkas Terbuka"],
                    saranKendala: doc.data()["Saran dan Kendala"],
                    dividerKulkas: doc.data()["Divider Kulkas"],
                    namaDistributor: doc.data()["Nama Distributor"],
                    kategoriFreezer: doc.data()["Kategori Freezer"],
                    produkPromosi: doc.data()["Produk Promosi"],
                    kebersihanBungaEs: doc.data()["Kebersihan Bunga Es"],
                    stockDibawahFreezer: doc.data()["Stock Dibawah Freezer"]
                });
                lastKey = doc.data()['Created At']
            });
            return { posts, lastKey };
        } catch (e) {
            console.log(e);
        }
    }

}

