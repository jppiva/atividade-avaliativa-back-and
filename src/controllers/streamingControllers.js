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
    const id = parseInt(req.params.id);
    const streamingTable = streamingTable.find(s => s.id === id);

    if (!streamingTable) {
        return res.status(404).json({
            success:false,
            message:`anime não encontrado, ${id}`
        });
    }

    res.status(200).json({
        success:true,
        data: streamingTable
    });
};

export { getAllStreamingTable, getStreamingTableById }