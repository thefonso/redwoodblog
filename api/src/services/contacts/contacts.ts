import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { validate } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const contacts: QueryResolvers['contacts'] = () => {
  return db.contact.findMany()
}

export const contact: QueryResolvers['contact'] = ({ id }) => {
  return db.contact.findUnique({
    where: { id },
  })
}

export const createContact: MutationResolvers['createContact'] = ({
  input,
}) => {
  validate(input.email, 'email', { email: true })
  return db.contact.create({
    data: input,
  })
}

export const updateContact: MutationResolvers['updateContact'] = ({
  id,
  input,
}) => {
  return db.contact.update({
    data: input,
    where: { id },
  })
}

export const deleteContact: MutationResolvers['deleteContact'] = ({ id }) => {
  return db.contact.delete({
    where: { id },
  })
}

// Example validations that can be done
export const createCar = ({ input }: Car) => {
  validate(input.make, 'make', {
    inclusion: ['Audi', 'BMW', 'Ferrari', 'Lexus', 'Tesla'],
  })
  validate(input.color, 'color', {
    exclusion: { in: ['Beige', 'Mauve'], message: 'No one wants that color' },
  })
  validate(input.hasDamage, 'hasDamage', {
    absence: true,
  })
  validate(input.vin, 'vin', {
    format: /[A-Z0-9]+/,
    length: { equal: 17 },
  })
  validate(input.odometer, 'odometer', {
    numericality: { positive: true, lessThanOrEqual: 10000 },
  })

  return db.car.create({ data: input })
}
