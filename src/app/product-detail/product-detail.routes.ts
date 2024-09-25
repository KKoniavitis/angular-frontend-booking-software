import { Routes } from "@angular/router";

export const productPath = "product";
export const productIdPath = ":id";
export const productMainPath = `${productPath}/${productIdPath}`;

export const productRoutes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./product-detail.component").then((m) => m.ProductDetailComponent)
  }
];