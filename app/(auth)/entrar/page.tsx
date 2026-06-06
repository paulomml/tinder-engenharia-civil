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
    <div className="flex flex-col gap-4 motion-safe:animate-in fade-in slide-in-from-bottom-2 duration-500">
      <Card className="w-full max-w-md mx-auto border border-white/10 bg-card/80 backdrop-blur-md shadow-2xl shadow-black/80 rounded-2xl">
        <CardHeader className="space-y-2 pb-6 px-6 pt-7">
          <CardTitle className="text-4xl font-black tracking-tight text-center uppercase leading-[1.05] text-white">
            Entrar
          </CardTitle>
          <CardDescription className="text-center text-sm font-normal text-muted-foreground leading-relaxed">
            Acesse o painel do Tinder da Engenharia Civil — UVA.
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
              enterKeyHint="next"
              placeholder="nome@exemplo.com"
              className="bg-white/5 border border-white/20 focus-visible:ring-primary focus-visible:ring-2 h-12 text-base transition-all"
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80"
              >
                Senha
              </Label>
              <Link
                href="/esqueci-a-senha"
                className="text-[11px] font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors"
              >
                Esqueceu a senha?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              enterKeyHint="done"
              className="bg-white/5 border border-white/20 focus-visible:ring-primary focus-visible:ring-2 h-12 text-base transition-all"
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-5 pt-6 px-6 pb-7 !border-t-0 !bg-transparent">
          <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base shadow-lg shadow-primary/20 active:scale-[0.98] transition-all">
            ENTRAR
          </Button>

          <div className="flex items-center gap-3 w-full text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <div className="h-px flex-1 bg-white/10" />
            <span>ou</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <Button
            variant="outline"
            className="w-full h-12 border border-white/20 bg-transparent text-white hover:bg-white/10 font-bold text-sm transition-all"
            asChild
          >
            <Link href="/registrar">CADASTRAR-SE</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
