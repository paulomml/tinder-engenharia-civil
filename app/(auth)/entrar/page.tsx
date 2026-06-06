import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold tracking-tighter text-center uppercase">
          Entrar
        </CardTitle>
        <CardDescription className="text-center">
          Bem-vindo ao Tinder da Engenharia Civil - UVA
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="nome@exemplo.com" />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Senha</Label>
            <Link
              href="/esqueci-a-senha"
              className="text-sm font-medium text-primary hover:underline"
            >
              Esqueceu a senha?
            </Link>
          </div>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button className="w-full">ENTRAR</Button>
        <div className="flex items-center gap-2 w-full text-sm">
          <div className="h-px flex-1 bg-border" />
          <span className="text-muted-foreground">ou</span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/registrar">CADASTRAR-SE</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
