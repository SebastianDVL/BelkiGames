

export class ControllerDev{
    constructor(){}

    getAll(req, res){
        
        res.status(200).json({
            message: "Exito al encontrar desarrolladoras",
            data:{},
            success: true
        })
    }

    getByNit(req, res){
        let nit = req.params.nit

        res.status(200).json({
            message: "Exito al encontrar desarrolladora",
            data:{nit:nit},
            success: true
        })
    }

    insert(req, res){

    }

    disableDevByNit(req, res){
        let nit = req.params.nit
    }

    modifyDevByNit(req, res){
        let nit = req.params.nit
        
    }



}