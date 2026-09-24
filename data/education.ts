export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  description?: string;
  organizations: Organization[];
}

export interface Organization {
  role: string;
  name: string;
}

export interface Publication {
  title: string;
  type: string;
  description?: string;
  year: string;
  metadata?: string;
}

export const education: Education = {
  institution: "Politeknik Manufaktur Negeri Bangka Belitung",
  degree: "Sarjana Terapan Komputer (S.Tr.Kom)",
  field: "Rekayasa Perangkat Lunak",
  period: "2023 – Present",
  organizations: [
    {
      role: "Ketua",
      name: "Himpunan Mahasiswa Jurusan Teknik Elektro dan Informatika",
    },
    {
      role: "Anggota",
      name: "Unit Kegiatan Mahasiswa Robotika",
    },
  ],
};

export const publications: Publication[] = [
  {
    title:
      "Development of the Edu-Game Media Lom's Ethnic Journey to Enhance Interest in Learning Mathematics and Physics Among Students",
    type: "Research Publication",
    year: "2024",
    metadata: "ISBN Publication",
  },
];
