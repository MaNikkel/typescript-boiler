import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/hello-world", (req: Request, res: Response) => {
  res.status(200).send("◕‿◕");
});

router.use("/", (req: Request, res: Response) => {
  res.status(404).send(`cannot ${req.method} => ${req.url}`);
});

export default router;
