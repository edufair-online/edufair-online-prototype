import Main from "@/components/Main";
import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import Head from "next/head";
import Link from "@/components/Link";
// CURSED COMPONENT
const about = () => {
  return (
    <Main>
      <Head>
        <title>ABOUT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Heading>Edufair online concept prototype</Heading>
        <Link href="https://github.com/raisoturu/edufair-online-prototype">
          Source code https://github.com/raisoturu/edufair-online-prototype
        </Link>
        <br />
        <br />
        Jadi gini gan, gw ada ide tapi gatau mau ngomong sama siapa. Kan
        biasanya SMA ngadain edufair, nah karena korona kan gabisa, gw kepikiran
        gimana kalo ngadain online aja gan.
        <br />
        Nanti konsepnya kaya online conference gitu
        <br />
        kaya gini
        <br />
        <br />
        <UnorderedList>
          <ListItem>
            <Link href="https://nextjs.org/conf">https://nextjs.org/conf</Link>
          </ListItem>
          <ListItem>
            <Link href="https://jamstackconf.com/">
              https://jamstackconf.com/
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.digitalocean.com/deploy/">
              https://www.digitalocean.com/deploy/
            </Link>
          </ListItem>
        </UnorderedList>
        <br />
        <br />
        nah jadi nanti ada perwakilan tiap kampus, mereka bikin online meet/live
        stream bebaass yang penting public bisa join
        <br />
        <br />
        nah fungsinya situs ini buat ngumpulin gitu
        <br />
        <br />
        sama ngasih tau statusnya lagi live apa engga
        <br />
        <br />
        gituu
        <br />
        gimana??
        <br />
        <br />
        please DM me on instagram: @anvaqta if u interested about this project
        and we can discuss deeper about this.
        <br />
        <br />
        Ah, bit introduction from me... nama gw Wisesa, gw Mahasiswa S1
        Informatika di Universitas Telkom Dulu gw anak osis juga anak
        pramuka(Dewan Ambalan hehe)
        <br />
        <Heading as="h2" size="2xl">
          Motivation
        </Heading>
        <br />
        <br />
        <UnorderedList>
          <ListItem>
            Gw gatau lulusan SMA gw ada yang daftar ke kampus gw apa engga,
            minimal se daerah lah. Nah kalo ada event kaya gini kita bisa
            tracking dan kontek2an sama maba. (kontekan sama alumni will be
            helpfull soon kalo kalian udah kuliah wkwkwk trust me)
          </ListItem>
          <ListItem>
            MINIM INFORMASI. Dulu jaman SMA gw gatau apa2 tentang kuliah,
            kampusnya apaaaja, jurusannya apaaaja, dan kuliah kaya gimana. nah
            harapannya acara ini bisa buat sharing antar Mahasiswa ke Siswa yang
            lagi bingung nyari kuliah atau bingung daftar dimana.(Memberi
            pencerahan)
          </ListItem>
          <ListItem>
            TERSEBAR. Jadi tiap sekolah mereka punya acara edufair masing2.
            Sekolah A punya edufair A, dan sekolah B punya edufair B, jadi
            peserta dan panitianya itu2 aja, dan kampus yang ikut itu2 aja. Ya,
            mungkin karena masalah tempat jadi gabisa terlalu gede. Nah, karena
            acaranya ini online, kan bisa colab tuh, kan sabi. bakal lebih
            komplit dan mantap2...
          </ListItem>
          <ListItem>
            PANDEMI. Ya karena pandemi gabisa bikin acara rame2, kalo acaranya
            online kan gausah mikir minjem tempat dll wkwkwk. Nah kalo gini
            orang luar jawa pun bakal bisa join karena acaranya online bro....
          </ListItem>
          <ListItem>And many moreee...</ListItem>
        </UnorderedList>
        <br />
        <br />
        Again, if you MAHASISWA GROBOGAN and have same vision with me please DM
        me :(
        <br />
        <br />
        Kita majukan masyarakat Grobogan agar menjadi lebih baik
        <br />
      </Box>
    </Main>
  );
};

export default about;
