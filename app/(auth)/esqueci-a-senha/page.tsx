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

export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col gap-4 motion-safe:animate-in fade-in slide-in-from-bottom-2 duration-500">
      <Card className="w-full max-w-md mx-auto border border-white/10 bg-card/80 backdrop-blur-md shadow-2xl shadow-black/80 rounded-2xl">
        <CardHeader className="space-y-2 pb-6 px-6 pt-7">
          <CardTitle className="text-3xl font-black tracking-tight text-center uppercase leading-[1.05] text-white">
            Esqueci a senha
          </CardTitle>
          <CardDescription className="text-center text-sm font-normal text-muted-foreground leading-relaxed">
            Digite seu e-mail e enviaremos um link para redefinir sua senha.
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-5 px-6">
          <div className="grid gap-2">
            <Label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80"
            >
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              enterKeyHint="send"
              placeholder="nome@exemplo.com"
              className="bg-white/5 border border-white/20 focus-visible:ring-primary focus-visible:ring-2 h-12 text-base transition-all"
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 pt-6 px-6 pb-7 !border-t-0 !bg-transparent">
          <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base shadow-lg shadow-primary/20 active:scale-[0.98] transition-all">
            ENVIAR LINK
          </Button>
          <Link
            href="/entrar"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Voltar para entrar
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
