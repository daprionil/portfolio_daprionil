import DogestImg1 from '../assets/dogest_image_1.png';
import DogestImg2 from '../assets/dogest_image_2.png';
import DogestImg3 from '../assets/dogest_image_3.png';
import DogestImg4 from '../assets/dogest_image_4.png';
import RDSImage1 from '../assets/rds_image.png';

const projects = [
    {
        name: 'El rincón del sabiondo',
        description:'El rincón del sabiondo, una excelente plataforma para los amantes de la lectura; elije y compra los libros de tu elección.',
        role:' Full Stack Web Developer',
        github:'https://github.com/Marifuhr/el_rincon_del_sabiondo',
        deploy:' el-rincon-del-sabiondo-eta.vercel.app ',
        images:[
            RDSImage1
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
        deploy:'pi-dogs-daprionil.vercel.app',
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
        
    }
]

export default projects;