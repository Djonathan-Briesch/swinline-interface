import type { JSX } from 'react'
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  BeakerIcon,
  CubeIcon,
  ClipboardIcon,
  AdjustmentsHorizontalIcon,
  ClockIcon,
  Cog6ToothIcon,
  BellAlertIcon,
  UsersIcon,
  ArrowPathIcon,
  ChartBarSquareIcon,
} from '@heroicons/react/24/outline'

export interface NavigationItem {
  to: string
  label: string
  icon: JSX.Element
}

export interface NavigationCategory {
  title: string
  items: NavigationItem[]
}

export const sidebarNavigation: NavigationCategory[] = [
  {
    title: 'Visão Geral',
    items: [
      {
        to: 'dashboard',
        label: 'Dashboard',
        icon: <HomeIcon className="h-5 w-5" />,
      },
    ],
  },
  {
    title: 'Gestão de Animais',
    items: [
      {
        to: 'sows',
        label: 'Matrizes',
        icon: <ClipboardDocumentListIcon className="h-5 w-5" />,
      },
      {
        to: 'insemitations',
        label: 'Inseminações',
        icon: <BeakerIcon className="h-5 w-5" />,
      },
      {
        to: 'confinements',
        label: 'Confinamentos',
        icon: <CubeIcon className="h-5 w-5" />,
      },
      {
        to: 'matrixSeparation',
        label: 'Separar Matriz',
        icon: <ArrowPathIcon className="h-5 w-5" />,
      },
    ],
  },
  {
    title: 'Gestão de Alimentação',
    items: [
      {
        to: 'feedPlans',
        label: 'Planos de Alimentação',
        icon: <ClipboardIcon className="h-5 w-5" />,
      },
      {
        to: 'feedingAdjustments',
        label: 'Ajustes de Alimentação',
        icon: <AdjustmentsHorizontalIcon className="h-5 w-5" />,
      },
      {
        to: 'feedingRecords',
        label: 'Histórico de Alimentação',
        icon: <ClockIcon className="h-5 w-5" />,
      },
    ],
  },
  {
    title: 'Configurações do Sistema',
    items: [
      {
        to: 'feederSettings',
        label: 'Configurações do Alimentador',
        icon: <Cog6ToothIcon className="h-5 w-5" />,
      },
      {
        to: 'alertParameters',
        label: 'Parâmetros de Alerta',
        icon: <BellAlertIcon className="h-5 w-5" />,
      },
      {
        to: 'users',
        label: 'Gestão de Usuários',
        icon: <UsersIcon className="h-5 w-5" />,
      },
      {
        to: 'reports',
        label: 'Relatórios',
        icon: <ChartBarSquareIcon className="h-5 w-5" />,
      },
    ],
  },
]
