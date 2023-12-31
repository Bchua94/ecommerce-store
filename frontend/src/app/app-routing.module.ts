import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './pages/card/card.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DetailComponent } from './pages/product-detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { AuthGuard } from "./_guards/auth.guard";
import { OrderComponent } from "./pages/order/order.component";
import { OrderDetailComponent } from "./pages/order-detail/order-detail.component";
import { ProductListComponent } from "./pages/product-list/product.list.component";
import { UserDetailComponent } from "./pages/user-edit/user-detail.component";
import { ProductEditComponent } from "./pages/product-edit/product-edit.component";
import { Role } from "./enum/Role";
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { CategoryAddComponent } from './pages/category-add/category-add.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
import { CategoryListComponent } from './pages/category-list/category.list.component';
import { StatsComponent } from './pages/statistics/stats.component';
import { UserListComponent } from './pages/user-list/user.list.component';

const routes: Routes = [
    { path: '', redirectTo: '/product', pathMatch: 'full' },
    { path: 'product/:id', component: DetailComponent },
    { path: 'category/:id', component: CardComponent },
    { path: 'product', component: CardComponent },
    { path: 'category', component: CardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LoginComponent },
    { path: 'register', component: SignupComponent },
    { path: 'cart', component: CartComponent },
    { path: 'success', component: SignupComponent },
    { path: 'order/:id', component: OrderDetailComponent, canActivate: [AuthGuard] },
    { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
    { path: 'seller', redirectTo: 'seller/home', pathMatch: 'full' },
    {
        path: 'seller/product',
        component: ProductListComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'seller/category',
        component: CategoryListComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'profile',
        component: UserDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'seller/product/:id/edit',
        component: ProductEditComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'seller/product/add',
        component: ProductAddComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'seller/category/:id/edit',
        component: CategoryEditComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'seller/category/add',
        component: CategoryAddComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'seller/users',
        component: UserListComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },

    {
        path: 'seller/home',
        component: StatsComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },

];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)//{onSameUrlNavigation: 'reload'}
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
