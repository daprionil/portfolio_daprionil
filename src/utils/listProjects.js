import DogestImg1 from '../assets/dogest_image_1.png';
import DogestImg2 from '../assets/dogest_image_2.png';
import DogestImg3 from '../assets/dogest_image_3.png';
import DogestImg4 from '../assets/dogest_image_4.png';
import RDSImage1 from '../assets/rds_image.png';
import RDSImage2 from '../assets/rds_image1.png';
import RDSImage3 from '../assets/rds_image2.png';

import FirebaseTaskAppImage1 from '../assets/firebase_task_app1.jpeg';
import FirebaseTaskAppImage2 from '../assets/firebase_task_app2.jpeg';
import FirebaseTaskAppImage3 from '../assets/firebase_task_app3.jpeg';

const projects = [
    {
        name: 'El rincón del sabiondo',
        description:'El rincón del sabiondo, una excelente plataforma para los amantes de la lectura; elije y compra los libros de tu elección.',
        role:' Full Stack Web Developer',
        github:'https://github.com/Marifuhr/el_rincon_del_sabiondo',
        deploy:'https://el-rincon-del-sabiondo-eta.vercel.app ',
        images:[
            RDSImage1,
            RDSImage2,
            RDSImage3
        ],
        tecnologies:[
            'PostgreSQL',
            'Express JS',
            'Sequelize',
            'React JS',
            'Redux',
            'React Router',
            'Chakra UI',
            'Cloudinary',
            'MercadoPago',
            'Auth0',
        ],
        
    },
    {
        name: 'Dogest',
        description:'Es una plataforma con gestión de usuarios y rutas privadas en donde puedes como usuario; Buscar, Crear y agregar a tus favoritos las razas que más de tu gusten.',
        images:[
            DogestImg1,
            DogestImg2,
            DogestImg3,
            DogestImg4
        ],
        role:' Full Stack Web Developer',
        github:'https://github.com/daprionil/pi_dogs',
        deploy:'https://dogest.vercel.app',
        tecnologies:[
            'PostgreSQL',
            'Express JS',
            'Sequelize',
            'React JS',
            'Redux',
            'React Router',
            'TailwindCSS',
            'Firebase',
        ],
        
    },
    {
        name: 'Firebase Task App',
        description:'CRUD Application; Gestiona multiproposito las tareas de tu vida cotiadiana',
        role:'Full Stack Web Developer',
        github:'https://github.com/Marifuhr/el_rincon_del_sabiondo',
        images:[
            FirebaseTaskAppImage1,
            FirebaseTaskAppImage2,
            FirebaseTaskAppImage3
        ],
        tecnologies:[
            'React',
            'Redux',
            'Redux Thunk',
            'TailwindCSS',
            'Firebase',
        ],
        
    }
]

export default projects;