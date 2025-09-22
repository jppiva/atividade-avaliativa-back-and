import dados from "../models/dados.js";
const streamingTable = dados.streamingTable;

const getAllStreamingTable = (req, res) => {
    let resultado = streamingTable;

    res.status(200).json({
        total: resultado.length,
        data: resultado
    });
};


const getStreamingTableById = (req, res) => {
    const { id } = req.params;

   
    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "ID deve ser um número válido!"
        });
    }

    
    const streaming = streamingTable.find(b => b.id === parseInt(id));

    if (!streaming) {
        return res.status(404).json({
            success: false,
            message: "streaming não encontrado nos registros de Hogwarts!"
        });
    }

    res.status(200).json({
        success: true,
        streaming: streaming
    });
};

export { getAllStreamingTable, getStreamingTableById }