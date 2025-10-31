export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  posted: string;
  invitation_link?: string;
}

const API_URL = import.meta.env.INTELLISCREEN_BASE_URL;
const API_KEY = import.meta.env.INTELLISCREEN_API_KEY;

if (!API_URL || !API_KEY) {
  throw new Error('INTELLISCREEN_BASE_URL o INTELLISCREEN_API_KEY no definidos en .env');
}

export async function getJobs(): Promise<Job[]> {
  try {
    const res = await fetch(`${API_URL}/positions/?page=1&per_page=50&status=Active`, {
      headers: {
        'X-API-Key': API_KEY,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      console.error('Error en la API:', res.status, res.statusText);
      return [];
    }

    const data = await res.json();
    if (!data?.positions) return [];

    const jobsMap = new Map<string, Job>();

    data.positions.forEach((pos: any) => {
      if (!jobsMap.has(pos.id)) {
        const job: Job = {
          id: pos.id,
          title: pos.job_title ?? pos.name ?? 'Sin título',
          location: pos.location ?? 'Remoto',
          type: pos.type === 'Assessment' ? 'Evaluación técnica' : pos.type ?? 'Otro',
          description: pos.status === 'Active' ? 'Vacante activa' : pos.status ?? 'Sin descripción',
          requirements: pos.tests?.map((t: any) => t.name) ?? [],
          posted: pos.created_at
            ? new Date(pos.created_at).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })
            : 'Sin fecha',
          invitation_link: pos.invitation_link,
        };
        jobsMap.set(pos.id, job);
      }
    });

    return Array.from(jobsMap.values());
  } catch (error) {
    console.error('Error al obtener empleos:', error);
    return [];
  }
}

export async function getJobById(id: string): Promise<Job | undefined> {
  const jobs = await getJobs();
  return jobs.find(job => job.id === id);
}

export async function getJobPaths() {
  const jobs = await getJobs();
  return jobs.map(job => ({ params: { id: job.id } }));
}
