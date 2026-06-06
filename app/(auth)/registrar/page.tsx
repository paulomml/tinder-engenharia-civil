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
  "Login",
  "Fotos",
  "Preferências",
  "Revisão",
];

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid gap-4 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="grid gap-2">
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" placeholder="Como você quer ser chamado?" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="idade">Idade</Label>
                <Input id="idade" type="number" placeholder="Sua idade" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="emoji">Emoji</Label>
                <Input id="emoji" placeholder="Ex: 👷‍♂️" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="frase">Frase (Bio)</Label>
              <Input id="frase" placeholder="Uma frase curta que te define" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="genero">Gênero</Label>
                <Select>
                  <SelectTrigger id="genero">
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
                <Label htmlFor="orientacao">Orientação</Label>
                <Select>
                  <SelectTrigger id="orientacao">
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

            <div className="flex flex-col gap-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="genero_visivel" />
                <Label htmlFor="genero_visivel" className="text-sm font-normal">
                  Gênero visível?
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="orientacao_visivel" />
                <Label htmlFor="orientacao_visivel" className="text-sm font-normal">
                  Orientação visível?
                </Label>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="curso">Curso</Label>
              <Input id="curso" placeholder="Ex: Engenharia Civil" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="faculdade">Faculdade</Label>
              <Input id="faculdade" defaultValue="UVA" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="instagram">Instagram</Label>
              <Input id="instagram" placeholder="@seuusuario" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="grid gap-4 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="seu@email.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm_password">Confirmar Senha</Label>
              <Input id="confirm_password" type="password" placeholder="••••••••" />
            </div>
          </div>
        );
      case 3:
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
      case 4:
        return (
          <div className="grid gap-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-center font-bold tracking-tighter uppercase">Quem você quer ver?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-muted/30 border-none p-4">
                <Label className="font-bold mb-3 block text-center">HOMEM</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="h-hetero" />
                    <Label htmlFor="h-hetero" className="text-xs font-normal">Hétero</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="h-gay" />
                    <Label htmlFor="h-gay" className="text-xs font-normal">Gay</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="h-bi" />
                    <Label htmlFor="h-bi" className="text-xs font-normal">Bi/Pan</Label>
                  </div>
                </div>
              </Card>
              <Card className="bg-muted/30 border-none p-4">
                <Label className="font-bold mb-3 block text-center">MULHER</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="m-hetero" />
                    <Label htmlFor="m-hetero" className="text-xs font-normal">Hétero</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="m-lesbica" />
                    <Label htmlFor="m-lesbica" className="text-xs font-normal">Lésbica</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="m-bi" />
                    <Label htmlFor="m-bi" className="text-xs font-normal">Bi/Pan</Label>
                  </div>
                </div>
              </Card>
              <Card className="bg-muted/30 border-none p-4">
                <Label className="font-bold mb-3 block text-center">NÃO BINÁRIO</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nb-all" />
                    <Label htmlFor="nb-all" className="text-xs font-normal">Todos</Label>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="grid gap-4 animate-in fade-in zoom-in-95 duration-500">
            <div className="relative aspect-[3/4] w-full max-w-[280px] mx-auto rounded-xl overflow-hidden bg-muted border-2 border-primary/20 shadow-xl">
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
            <p className="text-center text-xs text-muted-foreground mt-2">
              Quase lá! Revise seu perfil e clique em REGISTRAR.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold tracking-tighter text-center uppercase">
          Registro
        </CardTitle>
        <CardDescription className="text-center">
          {currentStep === 5 ? "Tudo pronto para começar!" : "Crie sua conta para começar as conexões."}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {/* Stepper Visual */}
        <div className="flex justify-between items-center text-[10px] uppercase tracking-widest border-b pb-4 overflow-x-auto no-scrollbar gap-2">
          {STEPS.map((step, index) => {
            const stepNumber = index + 1;
            const isActive = currentStep === stepNumber;
            return (
              <span
                key={step}
                className={`whitespace-nowrap transition-colors duration-300 ${
                  isActive ? "text-primary font-bold" : "text-muted-foreground"
                }`}
              >
                Passo {stepNumber}: {step}
              </span>
            );
          })}
        </div>

        {renderStepContent()}
      </CardContent>
      <CardFooter className="flex justify-between gap-4">
        {currentStep === 1 ? (
          <Button variant="outline" className="flex-1" asChild>
            <Link href="/entrar">VOLTAR</Link>
          </Button>
        ) : (
          <Button variant="outline" className="flex-1" onClick={prevStep}>
            VOLTAR
          </Button>
        )}

        {currentStep === 5 ? (
          <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            REGISTRAR
          </Button>
        ) : (
          <Button className="flex-1" onClick={nextStep}>
            PRÓXIMO
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
