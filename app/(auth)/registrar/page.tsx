"use client";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function RegisterPage() {
  return (
    <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold tracking-tighter text-center uppercase">
          Registro
        </CardTitle>
        <CardDescription className="text-center">
          Crie sua conta para começar as conexões.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {/* Visual Stepper Placeholder */}
        <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-muted-foreground border-b pb-4">
          <span className="text-primary font-bold">Passo 1: Você</span>
          <span>Passo 2: Login</span>
          <span>Passo 3: Fotos</span>
          <span>Passo 4: Verificação</span>
          <span>Passo 5: Concluído</span>
        </div>

        <div className="grid gap-4">
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
      </CardContent>
      <CardFooter className="flex justify-between gap-4">
        <Button variant="outline" className="flex-1" asChild>
          <Link href="/entrar">VOLTAR</Link>
        </Button>
        <Button className="flex-1">PRÓXIMO</Button>
      </CardFooter>
    </Card>
  );
}
