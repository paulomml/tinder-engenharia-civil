"use client";

import React, { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const STEPS = [
  "Você",
  "Fotos",
  "Preferências",
  "Revisão",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

type RegisterForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

const validateAuthFields = (
  field: keyof RegisterForm,
  value: string,
  current: RegisterForm
): string => {
  if (field === "email") {
    if (!value) return "E-mail obrigatório";
    if (!EMAIL_REGEX.test(value)) return "E-mail inválido";
  }
  if (field === "password") {
    if (!value) return "Senha obrigatória";
    if (!PASSWORD_REGEX.test(value)) {
      return "Mín. 8 caracteres, com 1 letra e 1 número";
    }
  }
  if (field === "confirmPassword") {
    if (!value) return "Confirme a senha";
    if (value !== current.password) return "As senhas não conferem";
  }
  return "";
};

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [authFields, setAuthFields] = useState<RegisterForm>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [authErrors, setAuthErrors] = useState<RegisterForm>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleAuthChange = (field: keyof RegisterForm, value: string) => {
    const next: RegisterForm = { ...authFields, [field]: value };
    setAuthFields(next);
    setAuthErrors((prev) => ({
      ...prev,
      [field]: validateAuthFields(field, value, next),
      ...(field === "password" && next.confirmPassword
        ? { confirmPassword: validateAuthFields("confirmPassword", next.confirmPassword, next) }
        : {}),
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid gap-4 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="grid gap-2">
              <Label htmlFor="nome" className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">Nome</Label>
              <Input id="nome" autoComplete="name" enterKeyHint="next" placeholder="Como você quer ser chamado?" className="bg-white/5 border border-white/20 h-12 text-base transition-all" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="idade" className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">Idade</Label>
                <Input id="idade" type="number" inputMode="numeric" placeholder="Sua idade" className="bg-white/5 border border-white/20 h-12 text-base transition-all" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="emoji" className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">Emoji</Label>
                <Input id="emoji" placeholder="Ex: 👷‍♂️" className="bg-white/5 border border-white/20 h-12 text-base transition-all" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="frase" className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">Frase (Bio)</Label>
              <Input id="frase" placeholder="Uma frase curta que te define" className="bg-white/5 border border-white/20 h-12 text-base transition-all" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="genero" className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">Gênero</Label>
                  <Select>
                  <SelectTrigger id="genero" className="bg-white/5 border border-white/20 h-12 text-base transition-all">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="homem">Homem</SelectItem>
                    <SelectItem value="mulher">Mulher</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="orientacao" className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">Orientação</Label>
                  <Select>
                  <SelectTrigger id="orientacao" className="bg-white/5 border border-white/20 h-12 text-base transition-all">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hetero">Hetero</SelectItem>
                    <SelectItem value="gay">Gay</SelectItem>
                    <SelectItem value="lesbica">Lésbica</SelectItem>
                    <SelectItem value="bi">Bi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-1">
              <div className="flex items-center space-x-2">
                <Checkbox id="genero_visivel" className="border-white/30 size-5" />
                <Label htmlFor="genero_visivel" className="text-sm font-normal cursor-pointer">
                  Gênero visível?
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="orientacao_visivel" className="border-white/30 size-5" />
                <Label htmlFor="orientacao_visivel" className="text-sm font-normal cursor-pointer">
                  Orientação visível?
                </Label>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="curso" className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">Curso</Label>
              <Input id="curso" placeholder="Ex: Engenharia Civil" className="bg-white/5 border border-white/20 h-12 text-base transition-all" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="faculdade" className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">Faculdade</Label>
              <Input id="faculdade" defaultValue="UVA" className="bg-white/5 border border-white/20 h-12 text-base transition-all" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="instagram" className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">Instagram</Label>
              <Input id="instagram" placeholder="@seuusuario" className="bg-white/5 border border-white/20 h-12 text-base transition-all" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">E-mail</Label>
              <Input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                enterKeyHint="next"
                placeholder="seu@email.com"
                value={authFields.email}
                onChange={(e) => handleAuthChange("email", e.target.value)}
                pattern={EMAIL_REGEX.source}
                aria-invalid={!!authErrors.email}
                className={`bg-white/5 border h-12 text-base transition-all ${authErrors.email ? "border-red-500/60" : "border-white/20"}`}
              />
              {authErrors.email && (
                <p className="text-[11px] font-medium tracking-wide text-red-400">{authErrors.email}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password" className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">Senha</Label>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                enterKeyHint="next"
                placeholder="••••••••"
                value={authFields.password}
                onChange={(e) => handleAuthChange("password", e.target.value)}
                pattern={PASSWORD_REGEX.source}
                aria-invalid={!!authErrors.password}
                className={`bg-white/5 border h-12 text-base transition-all ${authErrors.password ? "border-red-500/60" : "border-white/20"}`}
              />
              {authErrors.password ? (
                <p className="text-[11px] font-medium tracking-wide text-red-400">{authErrors.password}</p>
              ) : (
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
                  Mín. 8 caracteres · 1 letra · 1 número
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirm_password" className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">Confirmar Senha</Label>
              <Input
                id="confirm_password"
                type="password"
                autoComplete="new-password"
                enterKeyHint="done"
                placeholder="••••••••"
                value={authFields.confirmPassword}
                onChange={(e) => handleAuthChange("confirmPassword", e.target.value)}
                pattern={PASSWORD_REGEX.source}
                aria-invalid={!!authErrors.confirmPassword}
                className={`bg-white/5 border h-12 text-base transition-all ${authErrors.confirmPassword ? "border-red-500/60" : "border-white/20"}`}
              />
              {authErrors.confirmPassword && (
                <p className="text-[11px] font-medium tracking-wide text-red-400">{authErrors.confirmPassword}</p>
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="grid gap-4 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-primary/30 rounded-lg bg-muted/50 cursor-pointer hover:bg-muted/80 transition-colors">
              <p className="text-sm font-medium">Clique para selecionar uma foto sua!</p>
              <p className="text-xs text-muted-foreground mt-2">
                Capricha em! <span className="text-primary font-bold">👀</span>
              </p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="grid gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-center text-lg font-bold tracking-tight uppercase text-white">Quem você quer ver?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <Label className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-3 block text-center">Homem</Label>
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="h-hetero" className="border-white/30 size-5" />
                    <Label htmlFor="h-hetero" className="text-sm font-normal cursor-pointer">Hétero</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="h-gay" className="border-white/30 size-5" />
                    <Label htmlFor="h-gay" className="text-sm font-normal cursor-pointer">Gay</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="h-bi" className="border-white/30 size-5" />
                    <Label htmlFor="h-bi" className="text-sm font-normal cursor-pointer">Bi/Pan</Label>
                  </div>
                </div>
              </Card>
              <Card className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <Label className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-3 block text-center">Mulher</Label>
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="m-hetero" className="border-white/30 size-5" />
                    <Label htmlFor="m-hetero" className="text-sm font-normal cursor-pointer">Hétero</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="m-lesbica" className="border-white/30 size-5" />
                    <Label htmlFor="m-lesbica" className="text-sm font-normal cursor-pointer">Lésbica</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="m-bi" className="border-white/30 size-5" />
                    <Label htmlFor="m-bi" className="text-sm font-normal cursor-pointer">Bi/Pan</Label>
                  </div>
                </div>
              </Card>
              <Card className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <Label className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-3 block text-center">Não binário</Label>
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nb-all" className="border-white/30 size-5" />
                    <Label htmlFor="nb-all" className="text-sm font-normal cursor-pointer">Todos</Label>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="grid gap-4 animate-in fade-in zoom-in-95 duration-500">
            <div className="relative aspect-[3/4] w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden bg-muted border-2 border-primary/20 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
                <div className="flex items-baseline gap-2">
                  <h4 className="text-xl font-bold">Seu Nome, 18</h4>
                  <span className="text-lg">👷‍♂️</span>
                </div>
                <p className="text-sm text-gray-300 line-clamp-1 italic">&quot;Sua frase de efeito aqui...&quot;</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-0.5 rounded-full bg-primary/20 border border-primary/50 text-[10px] font-bold uppercase tracking-wider">Homem</span>
                  <span className="px-2 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/50 text-[10px] font-bold uppercase tracking-wider">Hetero</span>
                </div>
              </div>
              {/* Simulated Photo */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                <span className="text-4xl font-black rotate-12">PHOTO PREVIEW</span>
              </div>
            </div>
            <p className="text-center text-[11px] font-medium tracking-wide text-muted-foreground mt-2">
              Quase lá! Revise seu perfil e clique em REGISTRAR.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-4 motion-safe:animate-in fade-in slide-in-from-bottom-2 duration-500">
      <Card className="w-full max-w-md mx-auto border border-white/10 bg-card/80 backdrop-blur-md shadow-2xl shadow-black/80 rounded-2xl">
        <CardHeader className="space-y-2 pb-6 px-6 pt-7">
          <CardTitle className="text-3xl font-black tracking-tight text-center uppercase leading-[1.05] text-white">
            Registro
          </CardTitle>
          <CardDescription className="text-center text-sm font-normal text-muted-foreground leading-relaxed">
            {currentStep === STEPS.length ? "Tudo pronto para começar!" : "Crie sua conta para começar as conexões."}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 px-6">
          {/* Stepper Visual */}
          <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4">
            {STEPS.map((step, index) => {
              const stepNumber = index + 1;
              const isActive = currentStep === stepNumber;
              const isLast = index === STEPS.length - 1;
              return (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div
                      className={`w-9 h-9 rounded-full grid place-items-center text-sm font-bold transition-colors duration-300 ${
                        isActive
                          ? "bg-primary text-black"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {stepNumber}
                    </div>
                    <span
                      className={`text-[10px] uppercase tracking-widest transition-colors duration-300 ${
                        isActive ? "text-white font-bold" : "text-muted-foreground"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="h-[2px] flex-1 bg-white/10 self-center mb-5" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="max-h-[calc(100dvh-360px)] overflow-y-auto pr-1 -mr-1">
            {renderStepContent()}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-3 pt-6 px-6 pb-7 !border-t-0 !bg-transparent">
          {currentStep === 1 ? (
            <Button variant="outline" className="flex-1 h-12 border border-white/20 bg-transparent text-white hover:bg-white/10 font-bold uppercase tracking-wider text-xs active:scale-[0.98] transition-all" asChild>
              <Link href="/entrar">VOLTAR</Link>
            </Button>
          ) : (
            <Button variant="outline" className="flex-1 h-12 border border-white/20 bg-transparent text-white hover:bg-white/10 font-bold uppercase tracking-wider text-xs active:scale-[0.98] transition-all" onClick={prevStep}>
              VOLTAR
            </Button>
          )}

          {currentStep === STEPS.length ? (
            <Button className="flex-1 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-xs shadow-lg shadow-primary/20 active:scale-[0.98] transition-all">
              REGISTRAR
            </Button>
          ) : (
            <Button className="flex-1 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-xs shadow-lg shadow-primary/20 active:scale-[0.98] transition-all" onClick={nextStep}>
              PRÓXIMO
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
