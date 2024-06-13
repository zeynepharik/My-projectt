class Ogrenci:
    def_init_(self,isim):
    self.isim=isim
    self.sonraki= None

class OgrenciListesi:
    def__init__(self):
       self.ilk= None

    def ogrenci_ekle(self,isim):
        yeni_ogrenci= Ogrenci(isim)
        if self.ilk is None:
            self.ilk=yeni_ogrenci
        else:
            mevcut= self.ilk
            while mevcut.sonraki:
                mevcut= mevcut.sonraki
            mevcut.sonraki = yeni_ogrenci

    def listeyi_yazdır(self):
        mevcut = self.ilk
        while mevcut:
            print(mevcut.isim,end="*")
            mevcut = mevcut.sonraki
        print("None")    

ogrenci_listesi = OgrenciListesi()
ogrenci_listesi.ogrenci_ekle("Hatice")   
ogrenci_listesi.ogrenci_ekle("Ferdi")
ogrenci_listesi.ogrenci_ekle("Erdi")     


    



