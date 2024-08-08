import express, { Request, Response } from 'express';
import helmet from 'helmet';
import path from 'path';

const server = express();
let produtos: Array<{ name: string, number: number, team: string, id: number, transporte: string }> = [];

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true}));
server.use(express.static(path.join(__dirname, '../public')));

server.get('/ping', (req: Request, res: Response) => {
    res.json({ pong: true });
});

server.get('/produtos', (req: Request, res: Response) => {
    res.json({ produtos });
});

server.get('/produtos/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const produto = produtos.find(p => p.id === parseInt(id));

    if (produto) {
        res.json(produto);
    } else {
        res.status(404).json({ error: 'Produto não encontrado' });
    }
});

server.post('/produtos', (req: Request, res: Response) => {
    const { name, number, team, id, transporte } = req.body;

    if (!name || !number || !team || !id || !transporte) {
        return res.status(400).json({ error: 'Por favor, forneça todos os dados do produto.' });
    }

    const novoProduto = { name, number, team, id, transporte };
    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
});

server.get('/transporte/:de/:para', (req: Request, res: Response) => {
    const { de, para } = req.params;

    res.json({
        transporte: { 
            de: de.toUpperCase(),
            para: para.toUpperCase(),
            price: 14 
        }
    });
});

server.get('/', (req: Request, res: Response) => {
    let name = "Wesley";
    let user = "wbsa.neo";
    res.json({name, user});
});

server.listen(5757, () => {
    console.log('Servidor rodando no link: http://localhost:5757/');
});
