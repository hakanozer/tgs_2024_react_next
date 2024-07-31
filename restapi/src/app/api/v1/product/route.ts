import { IProduct } from "@/app/models/IProduct";
import { ApiUtil } from "@/app/utils/ApiUtil";
import { prisma } from "@/lib/prisma";

/**
 * @swagger
 * /api/v1/product:
 *   post:
 *     description: Ürün ekleme servisi
 *     responses:
 *       200:
 *         description: IProduct
 *       401:
 *          description: Plase Login
 */
export async function POST(_request: Request, _response: Response) {
    const product = await _request.json() as IProduct
    const dbProduct = await prisma.product.create({
        data: product
    })
    return ApiUtil(200, "Product Add", dbProduct)
}

/**
 * @swagger
 * /api/v1/product:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: detail
 */
export async function GET(_request: Request, _response: Response) {
    const allProduct = await prisma.product.findMany()
    return ApiUtil(200, "Product List", allProduct)
}
