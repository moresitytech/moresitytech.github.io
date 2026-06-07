import { useQuery } from "@tanstack/react-query";
import { api } from "./client";

export type Service = {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  status: string;
  updatedAt: string;
};

export type Project = {
  id: string;
  title: string;
  client: string;
  tags: string[];
  cover: string;
  year: number;
  status: string;
};

export type Testimonial = {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  status: string;
};

export type HomepageContent = {
  headline: string;
  subheading: string;
  callToAction: string;
  updatedAt: string;
};

export const getServices = () => api.get<Service[]>("/api/content/services");
export const getProjects = () => api.get<Project[]>("/api/content/projects");
export const getTestimonials = () => api.get<Testimonial[]>("/api/content/testimonials");
export const getHomepage = () => api.get<HomepageContent>("/api/content/homepage");

export const useServices = () =>
  useQuery({ queryKey: ["content", "services"], queryFn: getServices, staleTime: 60_000 });
export const useProjects = () =>
  useQuery({ queryKey: ["content", "projects"], queryFn: getProjects, staleTime: 60_000 });
export const useTestimonials = () =>
  useQuery({ queryKey: ["content", "testimonials"], queryFn: getTestimonials, staleTime: 60_000 });
export const useHomepage = () =>
  useQuery({ queryKey: ["content", "homepage"], queryFn: getHomepage, staleTime: 60_000 });
